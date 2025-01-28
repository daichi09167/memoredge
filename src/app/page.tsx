import React from 'react';
import { Stack, Heading } from '@chakra-ui/react'; // Chakra UI コンポーネント
import {Navbar} from '@/components/ui/header'; // Navbar のインポート
import CenteredHeading from '@/components/ui/CenteredHeading'; // インポート


const Page = () => {
  return (
  <div
    style={{
      backgroundImage: `url("/blurry-gradient-haikei.svg")`, // 相対パス
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
  >
      {/* ナビバー */}
      <Navbar />

      {/* メインコンテンツ */}
      <main >
      {/* センタリングコンポーネント */}
      <CenteredHeading 
        text="Empower Your Memory, Expand Your Potential." 
        subText="Innovative tools to transform how you remember and grow." 
      />
      </main>
    </div>
  );
};

export default Page;
