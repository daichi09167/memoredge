import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { MdOutlineAccountCircle, MdOutlinePersonAddAlt } from 'react-icons/md';

 export const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url("/blurry-gradient-haikei.svg")`, // 相対パス
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    
      }}
    >
      <Link href="/">
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
      <div style={{ display: 'flex', gap: '10px' }}>
      <Link href="/signup">
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: '#FFCF56',
            color: 'black',
            fontWeight: 'bold',
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}           
        >
          <MdOutlinePersonAddAlt />
          新規会員登録
        </button>
      </Link>
      <Link href="/login">
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'transparent',
            color: 'black',
            fontWeight: 'bold',
            padding: '5px 10px',
            borderRadius: '5px',
            border: '1px solid #FFCF56',
            cursor: 'pointer',
          }}
        >
          <MdOutlineAccountCircle />
          ログイン
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
