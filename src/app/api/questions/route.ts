import { NextResponse } from "next/server";
import { query } from "@/lib/db";

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

    // PostgreSQLにデータを挿入
    const result = await query(
      "INSERT INTO questions (question, answer) VALUES ($1, $2) RETURNING *",
      [question, answer]
    );

    return NextResponse.json(
      { message: "Question registered successfully!", data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving question:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the question." },
      { status: 500 }
    );
  }
}
