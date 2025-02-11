"use client";
import React, { useState } from 'react';
import { Button, Card, HStack ,Center} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

interface DeleteAccountFormProps {
    onDeleteSuccess: () => void;  // 削除成功時のコールバック
    onCancel: () => void;  // キャンセル時のコールバック
  }

  const DeleteAccountForm: React.FC<DeleteAccountFormProps> = ({ onDeleteSuccess, onCancel }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { data: session } = useSession();
    // userIdをセッションから取得
    const userId = session?.user?.id;

    if (!userId) {
        return <div>ログインしていないか、セッションが無効です</div>;
      }
  
    const handleDelete = async () => {
      setIsDeleting(true);
      setErrorMessage(null);
  
      try {
        const res = await fetch('/api/user/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });
  
        if (res.ok) {
          onDeleteSuccess();  // 削除成功時の処理
        } else {
          const data = await res.json();
          setErrorMessage(data.message || '削除に失敗しました');
        }
      } catch (error) {
        setErrorMessage('退会処理中にエラーが発生しました');
      } finally {
        setIsDeleting(false);
      }
    };
  
  return (
    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
        <Card.Header>
         <Card.Title>アカウント削除しますか？</Card.Title>
         <Card.Description>
            もしアカウントを削除すると、全てのデータが消去されます。復元はできません。
         </Card.Description>
        </Card.Header>
        <Card.Body>
        <HStack gap="6">
           <Button variant="outline" colorScheme="blackAlpha"
             onClick={handleDelete} disabled={isDeleting}>       
                アカウント削除
            </Button>
            <Button variant="outline" colorScheme="blackAlpha"
             onClick={onCancel} disabled={isDeleting}>       
                キャンセル
            </Button>
        </HStack>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
        </Card.Footer>
      </Card.Root>
  );
};
  
  export default DeleteAccountForm;
  