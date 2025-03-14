import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { MdOutlineAccountCircle} from 'react-icons/md';
import { Button } from "@chakra-ui/react"

 export const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    
      }}
    >
      <Link href="/">
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
      <div style={{ display: 'flex', gap: '10px' }}>
      <Link href="/login">
        <Button variant="surface" colorScheme="blackAlpha">
          <MdOutlineAccountCircle />
          ログイン
        </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
