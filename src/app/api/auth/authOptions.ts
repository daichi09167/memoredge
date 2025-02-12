import { NextAuthOptions, Session } from "next-auth";
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

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // ログインページ
    newUser: "/dashboard", // 新規ユーザーリダイレクト先
  },
  secret: process.env.NEXTAUTH_SECRET, // 必須の secret 設定
  callbacks: {
    async signIn({ user, account }) {
      if (account && account.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? undefined },
        });

        if (!existingUser) {
          // 新規ユーザー登録
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

        const existingAccount = await prisma.account.findUnique({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
        });

        if (!existingAccount) {
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              type: account.type,
              access_token: account.access_token || "",
              refresh_token: account.refresh_token || "",
              expires_at: account.expires_at || 0,
            },
          });
        }
        return true;
      }
      return false;
    },
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id; // セッションにユーザーIDを追加
      }
      return session;
    },
  },
};
