import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Avatar} from "@/components/ui/avatar";
import { MdOutlineAccountCircle } from "react-icons/md";

 export const HomeNavbar = () => {
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
        {/* アバタ- */}
        <Link href="/profile">
        <Avatar/>
          </Link>
    </nav>
  );
};

export default HomeNavbar;
