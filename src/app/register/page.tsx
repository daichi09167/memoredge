"use client"; // これを追加して、クライアントサイドでのみ動作させる
import React from 'react';
import  QuestionRegisterPage from '@/components/ui/QuestionRegistration';
import { Heading,Center} from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";


const RegisterPage: React.FC = () => {
    return (
        <div>
            <Center>
            <Heading size="5xl">問題と回答を登録してみよう！</Heading>
            </Center>
            <SessionProvider>
            <QuestionRegisterPage />
            </SessionProvider>
            
        </div>
    );
};

export default RegisterPage;