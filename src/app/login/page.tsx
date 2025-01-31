import React from "react";
import {CardWithForm2} from "@/components/ui/LoginForm";
import Header from "@/components/ui/header";
import { Center, Stack } from "@chakra-ui/react"
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  return (
    
    <div >
      {/* ヘッダー */}
      <Header />
      <Center>
      {/* メインコンテンツ */}
      <main >
        <div >
          {/* サインアップフォーム */}
          <CardWithForm2 />
        </div>
      </main>
      </Center>
    </div>

  );
};

export default LoginPage;
