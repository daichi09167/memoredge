import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";  // Prismaクライアントをインポート
import { authOptions } from "@/app/api/auth/[...nextauth]/route";  // 認証オプションをインポート
import { getServerSession } from "next-auth/next";


// POST: 質問と回答をデータベースに登録
export async function POST(req: Request) {
  try {
    const { question, answer ,userId } = await req.json();

    // 入力値のバリデーション
    if (!question || !answer || !userId) {
      return NextResponse.json(
        { message: "Question, Answer, and User ID are required" },
        { status: 400 }
      );
    }

    // Prismaを使って質問と回答をデータベースに挿入
    const result = await prisma.question.create({
      data: {
        question, 
        answer,
        userId,
      },
    });


    return NextResponse.json(
      { message: "Question registered successfully!", data: result},
      { status: 201 }
    );
  } catch  {
    console.error("Error saving question:");
    return NextResponse.json(
      { message: "An error occurred while registering the question." },
      { status: 500 }
    );
  }
}

// GET: 質問データを取得
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");


  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required." },
      { status: 400 }
      );
    }

    try {
    // Prismaを使ってユーザー固有の質問を取得
    const questions = await prisma.question.findMany({
      where: {
        userId: parseInt(userId), // `userId` を整数に変換
      },
    });
    return NextResponse.json(questions, { status: 200 });
  } catch  {
    console.error("Error fetching questions:");
    return NextResponse.json(
      { message: "An error occurred while fetching questions." },
      { status: 500 }
    );
  }
}

// DELETE: 質問データを削除
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions); // セッションから取得

  if (!req.body) {
    return NextResponse.json({ message: "Request body is missing." }, { status: 400 });
  }

  let question, answer;

  try {
    const requestData = await req.json(); // リクエストボディをパース
    question = requestData.question;
    answer = requestData.answer;
  } catch {
    return NextResponse.json({ message: "Invalid JSON format in request body." }, { status: 400 });
  }

  if (!session?.user?.id) {
    return NextResponse.json({ message: "User is not authenticated." }, { status: 401 });
  }

  if (!question || !answer) {
    return NextResponse.json({ message: "Question and answer are required." }, { status: 400 });
  }

  try {
    // Prismaを使って質問を削除（ユーザーIDを追加して、特定のユーザーの質問を削除）
    const deletedQuestion = await prisma.question.delete({
      where: {
        userId_answer_question: {
          userId: parseInt(session.user.id),
          answer: answer,
          question: question,
        },
      },
    });

    return NextResponse.json({ success: true, deletedData: deletedQuestion });
  } catch  {
    console.error("Error deleting question:");
    return NextResponse.json(
      { message: "An error occurred while deleting the question." },
      { status: 500 }
    );
  }
}
