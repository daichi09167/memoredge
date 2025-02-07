"use client";
import React from "react";
import { Button, Card,} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const LogoutForm: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // サインアウト後に /logout にリダイレクトする
    await signOut({ callbackUrl: "http://localhost:3000/logout" });
  };
  
  return (

    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
        <Card.Header>
          <Card.Title>ログアウトしますか？</Card.Title>
          <Card.Description>
             ログアウトすると、MemorEdgeからログアウトします。
          </Card.Description>
        </Card.Header>
        <Card.Body>
        <Button variant="outline" colorScheme="blackAlpha"
             onClick={handleLogout}>       
                ログアウト
            </Button>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
        </Card.Footer>
      </Card.Root>
  );
};
  
  export default LogoutForm;
  