import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Avatar} from "@/components/ui/avatar";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSession } from "next-auth/react";  // useSession フックをインポート


export const HomeNavbar = () => {
  const { data: session } = useSession();
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url("/blurry-gradient-haikei.svg")`, // 相対パス
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
          color: '#0F0404',
        }}
      >
        MemorEdge
      </div>
      </Link>
        {/* Google アカウントのアイコンを表示 */}
        <Link href="/profile">
        {session?.user?.image ? (
        <Avatar src={session.user.image}/>
      ) : (
        <MdOutlineAccountCircle size={32} />  
      )}
          </Link>
    </nav>
  );
};

export default HomeNavbar;
