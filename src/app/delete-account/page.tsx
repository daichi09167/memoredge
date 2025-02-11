"use client";
import React, { useState } from 'react';
import DeleteAccountForm from "@/components/ui/DeleteAccountForm";
import HomeNavbar from "@/components/ui/HomeHeader";
import { Center, Stack } from "@chakra-ui/react";
import { SessionProvider ,useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

const DeleteAccountPage: React.FC = () => {
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const router = useRouter();

    const handleDeleteSuccess = () => {
        setTimeout(() => {
            router.push('/'); // メッセージ表示後に一番最初の画面へ遷移
        }, 2000); // 2秒後に遷移
    };
    const handleCancelDelete = () => {
        setShowDeleteForm(false); // 削除フォームを非表示
        router.push('/dashboard'); // キャンセル時にダッシュボードページにリダイレクト
    };

    return (
        
        <div>
    <SessionProvider>
        <Stack gap={100}>
            <HomeNavbar />
            <Center>
            <DeleteAccountForm 
            onDeleteSuccess={handleDeleteSuccess}
            onCancel={handleCancelDelete}
            />
            </Center>
        </Stack>
    </SessionProvider>
        </div>
    );
    };

    export default DeleteAccountPage;

