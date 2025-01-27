"use client";   
import { MdAdd, MdCheck, MdOutlineSearch } from "react-icons/md";
import { Field } from "@/components/ui/field";
import { useRouter } from "next/router";  // useRouter をインポート

export default function Sidebar() {
    const router = useRouter(); // useRouter を呼び出し
  // SearchInputについて
  const SearchInput = () => (
    <Field>
      <MdOutlineSearch
        style={{
          position: "absolute",
          top: "0.625rem",
          left: "0.75rem",
          color: "#6B7280",
          fontSize: "1.25rem",
        }}
      />
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem 0.5rem 2.5rem",
          borderRadius: "0.5rem",
          border: "1px solid #D1D5DB",
          color: "#374151",
          outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#FB923C";
          e.target.style.boxShadow = "0 0 0 2px rgba(251, 146, 60, 0.5)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#D1D5DB";
          e.target.style.boxShadow = "none";
        }}
      />
    </Field>
  );

  // Button コンポーネント
  const Button = ({
    icon: Icon,
    text,
    onHoverColor,
  }: {
    icon: React.ElementType;
    text: string;
    onHoverColor: string;
    onClick: () => void;  // onClick イベントを受け取るように変更
  }) => (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#FB923C",
        color: "#FFFFFF",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = onHoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FB923C")}
      onClick={onClick}  // ボタンクリック時に onClick イベントを呼び出し
    >
      <Icon style={{ fontSize: "1rem" }} />
      <span style={{ fontSize: "0.875rem" }}>{text}</span>
    </button>
  );
  // 登録ページに遷移する関数
  const handleRegisterClick = () => {
    router.push("/register");  // /register ページに遷移
  };

  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        height: "100vh",
        width: "16rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 0",
      }}
    >
      <div style={{ width: "91.6667%", marginBottom: "2rem" }}>
        <SearchInput />
      </div>
      <div
        style={{
          width: "91.6667%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button icon={MdCheck} text="クイズ作成" onHoverColor="#F97316" onClick={() => {}}/>
        {/* 登録ボタンに遷移処理を追加 */}
        <Button icon={MdAdd} text="登録" onHoverColor="#F97316" onClick={handleRegisterClick} />
      </div>
    </div>
  );
}
