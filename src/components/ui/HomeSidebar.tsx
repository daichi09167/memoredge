"use client";   
import { MdAdd, MdOutlineSearch } from "react-icons/md";
import { Field } from "@/components/ui/field";
import { useRouter } from "next/navigation";  // useRouter をインポート
import { Button } from "@chakra-ui/react";

export default function Sidebar() {
    const router = useRouter(); // useRouter を呼び出し
  // SearchInputについて
  //const SearchInput = () => (
    //<Field>
      //<MdOutlineSearch
        //style={{
          //position: "absolute",
          //top: "0.625rem",
          //left: "0.75rem",
          //color: "#6B7280",
          //fontSize: "1.25rem",
        //}}
      //>
      //<input
        //type="text"
        //placeholder="Search"
        //style={{
          //width: "100%",
         // padding: "0.5rem 0.75rem 0.5rem 2.5rem",
          //borderRadius: "0.5rem",
          //border: "1px solid #D1D5DB",
          //color: "#374151",
          //outline: "none",
          //transition: "border-color 0.2s, box-shadow 0.2s",
        //}}
        //onFocus={(e) => {
          //e.target.style.borderColor = "#FB923C";
          //e.target.style.boxShadow = "0 0 0 2px rgba(251, 146, 60, 0.5)";
       // }}
        //onBlur={(e) => {
        //  e.target.style.borderColor = "#D1D5DB";
        //  e.target.style.boxShadow = "none";
        //}}
      ///>
    //</Field>
 // );

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
