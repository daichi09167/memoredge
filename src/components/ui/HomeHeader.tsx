import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Avatar} from "@/components/ui/avatar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSession } from "next-auth/react";  // useSession フックをインポート
import { Button ,Group} from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useRouter } from "next/navigation";  // useRouter をインポート
import { MdAdd} from "react-icons/md";



export const HomeNavbar = () => {
  const { data: session } = useSession();
  const router = useRouter(); // useRouter を呼び出し
  const handleRegisterClick = () => {
    router.push("/register");  // /register ページに遷移
  };
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor :'#FAF9F6',
        padding: '10px 20px',
        borderBottom: '1px solid #FFECD2',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link href="/dashboard">
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#007ACC',
        }}
      >
        MemorEdge
      </div>
      </Link>
      <Group>
      <div style={{ display: 'flex', gap: '50px' }}>
      {/* 登録ボタンに遷移処理を追加 */}
      <Button onClick={handleRegisterClick} colorScheme="blackAlpha" variant="outline">
        <MdAdd />
        登録
        </Button>
      </div>

        {/* Google アカウントのアイコンを表示 */}
      <MenuRoot>
         <MenuTrigger asChild>
        <Button variant="plain" rounded="full">
        {session?.user?.image ? (
        <Avatar src={session.user.image}/>
      ) : (
        <MdOutlineAccountCircle size={32} />  
      )}
      </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem asChild value="profile">
          <Link href="/profile">プロフィール</Link>
        </MenuItem>
        <MenuItem asChild value="logout">
          <Link href="/logout">ログアウト</Link>
        </MenuItem>
        <MenuItem asChild value="privacy-policy">
          <Link href="/privacy-policy">プライバシーポリシー</Link>
        </MenuItem>
      </MenuContent>
          </MenuRoot>

      </Group>
    </nav>
  );
};

export default HomeNavbar;
