import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // ログインページ
    newUser: "/dashboard", // 新規ユーザーリダイレクト
  },
  callbacks: {
    async signIn({ user, account }) {
      // Google認証を使用してサインインした場合の処理
      if (account && account.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? undefined },
        });

        // 既存のユーザーがいなければ新しく作成
        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image || null,
            },
          });
          return true;
        }

        // 既存ユーザーがいた場合、そのユーザーとGoogleアカウントをリンク
        return true;
      }
      return false;
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id; // セッションにユーザーIDを含める
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
