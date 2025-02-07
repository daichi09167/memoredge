import React from 'react';
import { Stack, Heading ,Separator} from '@chakra-ui/react'; // Chakra UI コンポーネント
import {Navbar} from '@/components/ui/header'; // Navbar のインポート
import CenteredHeading from '@/components/ui/CenteredHeading'; // インポート
import Footer from '@/components/ui/Footer'; // Footer のインポート


const Page = () => {
  return (
  <div
    style={{
      backgroundColor :'#FAF9F6',
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
      <Separator size="xs"/>
      {/* フッター */}
      <Footer />
    </div>
  );
};

export default Page;
