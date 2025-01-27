"use client"; 
import { useState } from "react";

export default function RegisterPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 問題と回答を登録するロジックをここに追加
    console.log("Question:", question);
    console.log("Answer:", answer);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>問題と回答の登録</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="question" style={{ display: "block" }}>
            問題
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="問題を入力"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #D1D5DB" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="answer" style={{ display: "block" }}>
            回答
          </label>
          <input
            id="answer"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="回答を入力"
            style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #D1D5DB" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#FB923C",
            color: "#FFFFFF",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          登録
        </button>
      </form>
    </div>
  );
}
