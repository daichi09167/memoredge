import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";  // Prismaクライアントをインポート


// POST: 質問と回答をデータベースに登録
export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json();

    // 入力値のバリデーション
    if (!question || !answer) {
      return NextResponse.json(
        { message: "Question and Answer are required." },
        { status: 400 }
      );
    }

    // Prismaを使って質問と回答をデータベースに挿入
    const result = await prisma.question.create({
      data: { question, answer },
    });


    return NextResponse.json(
      { message: "Question registered successfully!", data: result},
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving question:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the question.", error: (error as any).message },
      { status: 500 }
    );
  }
}

// GET: 質問データを取得
export async function GET() {
  try {
    // Prismaを使って質問を取得
    const questions = await prisma.question.findMany();
    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching questions.", error: (error as any).message },
      { status: 500 }
    );
  }
}

// DELETE: 質問データを削除
export async function DELETE(req: NextRequest){
  const { question, answer } = await req.json(); // body から question と answer を取得
  if (!question || !answer) {
    return NextResponse.json({ message: "Question and answer are required." }, { status: 400 });
  }

    try {
      // Prismaを使って質問を削除
      const deletedQuestion = await prisma.question.delete({
        where: {
          question_answer: {
            question: question,
            answer: answer,
          },
        },
      });
      return NextResponse.json({ success: true, deletedData: deletedQuestion });
    } catch (error) {
      console.error("Error deleting question:", error);
      return NextResponse.json(
        { message: "An error occurred while deleting the question.", error: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
      );
    }
  }