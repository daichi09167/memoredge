import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Avatar} from "@/components/ui/avatar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSession } from "next-auth/react";  // useSession フックをインポート
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { SessionProvider } from "next-auth/react";  // Import SessionProvider



export const HomeNavbar = () => {
  const { data: session } = useSession();
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
    </nav>
  );
};

export default HomeNavbar;
