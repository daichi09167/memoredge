import React from 'react';
import { MdOutlineAccountCircle, MdOutlinePersonAddAlt } from 'react-icons/md';

 export const Navbar = () => {
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
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#E50000',
        }}
      >
        MemorEdge
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
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
      </div>
    </nav>
  );
};

export default Navbar;
