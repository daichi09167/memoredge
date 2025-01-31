import React from "react";
import {CardWithForm2} from "@/components/ui/LoginForm";
import Header from "@/components/ui/header";
import { Center, Stack } from "@chakra-ui/react"

const LoginPage: React.FC = () => {
  return (
    
    <div >
      {/* ヘッダー */}
      <Stack gap={100}>
      <Header />
      <Center>
      {/* メインコンテンツ */}
          {/* サインアップフォーム */}
          <CardWithForm2 />
      </Center>
      </Stack>
    </div>

  );
};

export default LoginPage;
