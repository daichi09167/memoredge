"use client";   
import { MdAdd} from "react-icons/md";
import { useRouter } from "next/navigation";  // useRouter をインポート
import { Button } from "@chakra-ui/react";

export default function Sidebar() {
    const router = useRouter(); // useRouter を呼び出し

  // 登録ページに遷移する関数
  const handleRegisterClick = () => {
    router.push("/register");  // /register ページに遷移
  };

  return (
    <div
      style={{
        backgroundColor: "#FAF9F6",
        height: "100vh",
        width: "14rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem 0",
      }}
    >
      <div style={{ width: "90%", marginBottom: "2rem" }}>
        {/* <SearchInput /> */} {/* SearchInput コンポーネントを追加 */}
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* 登録ボタンに遷移処理を追加 */}
        <Button onClick={handleRegisterClick} colorScheme="blackAlpha" variant="outline">
          <MdAdd />
          登録
        </Button>
      </div>
    </div>
  );
}
