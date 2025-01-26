import React from "react";
import {CardWithForm} from "@/components/ui/SignupForm";
import Header from "@/components/ui/header";
import { Center, Stack } from "@chakra-ui/react"

const SignupPage: React.FC = () => {
  return (
    
    <div >
      {/* ヘッダー */}
      <Header />
      <Center>
      {/* メインコンテンツ */}
      <main >
        <div >
          {/* サインアップフォーム */}
          <CardWithForm />
        </div>
      </main>
      </Center>
    </div>

  );
};

export default SignupPage;
