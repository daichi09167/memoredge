import React from 'react';
import HomeHeader from '@/components/ui/HomeHeader'; // Assuming HomeHeader.tsx is in components directory
import HomeSidebar from '@/components/ui/HomeSidebar'; // Assuming HomeSidebar.tsx is in components directory
import { Stack } from "@chakra-ui/react"
const DashboardPage = () => {
    return (
      <div >
            {/* ヘッダー */}
            <HomeHeader />
            <Stack>
            {/* メインコンテンツ */}
            <main >
              <div >
                {/* サイドバー */}
                <HomeSidebar />
              </div>
            </main>
            </Stack>
          </div>
    );
  };
  
  export default DashboardPage;