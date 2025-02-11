import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
    try {
      // リクエストボディからユーザーIDを取得
      const { userId } = await req.json();
  
      if (!userId) {
        return NextResponse.json({ message: 'ユーザーIDが必要です' }, { status: 400 });
      }
  
      // ユーザーとその関連データ（質問、アカウント、セッション）の削除
      await prisma.user.delete({
        where: { id: userId },
        include: {
          accounts: true,    // 関連するアカウントを削除
          sessions: true,    // 関連するセッションを削除
          questions: true,   // 関連する質問を削除
        },
      });
  
      // 依存しているデータを削除（Prismaの`onDelete: Cascade`で関連データも削除される）
      // 特に`questions`, `accounts`, `sessions`の削除を確認
  
      return NextResponse.json({ message: 'アカウントが削除されました' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'アカウント削除に失敗しました' }, { status: 500 });
    }
  }
