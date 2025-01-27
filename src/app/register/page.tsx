import React from 'react';
import  QuestionRegisterPage from '@/components/ui/QuestionRegistration';
import { Heading,Center} from '@chakra-ui/react';

const RegisterPage: React.FC = () => {
    return (
        <div>
            <Center>
            <Heading size="5xl">問題と回答を登録してみよう！</Heading>
            </Center>
            <QuestionRegisterPage />
            
        </div>
    );
};

export default RegisterPage;