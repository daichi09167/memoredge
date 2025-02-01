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
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? undefined },
          include: { accounts: true },
        });

        if (!existingUser) {
          // 新規ユーザー登録時にアカウント情報も登録
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image || null,
              accounts: {
                create: {
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  type: account.type,
                },
              },
            },
          });
          return true;
        }

        // 既存ユーザーがいる場合でもアカウント情報がなければリンクエラー
    const linkedAccount = await prisma.account.findFirst({
      where: {
        userId: existingUser.id,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
      },
    });
    if (!linkedAccount) {
      return "/auth/error?error=account_not_linked"; // カスタムエラー
    }
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
