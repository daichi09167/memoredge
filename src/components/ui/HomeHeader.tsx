import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Avatar, AvatarGroup } from "@/components/ui/avatar";

 export const HomeNavbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF6E8',
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
          color: '#E50000',
        }}
      >
        MemorEdge
      </div>
      </Link>
        {/* アバタ- */}
          <Avatar></Avatar>
    </nav>
  );
};

export default HomeNavbar;
