import { NextRequest, NextResponse } from "next/server";
import { pool, query } from "@/lib/db";

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
      { message: "An error occurred while registering the question.", error: (error as any).message },
      { status: 500 }
    );
  }
}

// GET: 質問データを取得
export async function GET() {
  try {
    const result = await query("SELECT * FROM questions");

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching questions.", error: (error as any).message },
      { status: 500 }
    );
  }
}

// DELETE: 質問データを削除
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { question, answer } = await req.json(); // body から question と answer を取得
  console.log("Received question:", question, "Received answer:", answer);  // 受け取った値をログに出力
  if (!question || !answer) {
    return NextResponse.json({ message: "Question and answer are required." }, { status: 400 });
  }

  const client = await pool.connect();
  try {
    console.log(`Deleting question with question: "${question}" and answer: "${answer}"`);  // ログを出力

    await client.query("BEGIN");

    // DELETE クエリ実行
  // `question` と `answer` に基づいて削除を実行
  const result = await client.query(
    "DELETE FROM questions WHERE question = $1 AND answer = $2 RETURNING *",
    [question, answer]
  );
  console.log("Delete result:", result);  // 削除結果のログを出力
  
  if (result.rowCount === 0) {
    console.log(`No record found with question: "${question}" and answer: "${answer}"`);  // 該当データがない場合
    return NextResponse.json({ message: "Question and Answer not found." }, { status: 404 });
  }

    await client.query("COMMIT");

    
    return NextResponse.json({ success: true, deletedData: result.rows[0] });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error deleting question:", error);  // エラーをログに出力

    return NextResponse.json(
      { message: "An error occurred while deleting the question.", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  } finally {
    client.release();  // クライアント接続の解放
  }
}
