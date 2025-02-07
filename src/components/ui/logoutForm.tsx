"use client";
import React from "react";
import { Button, Card } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export const LogoutForm: React.FC = () => {
  return (
    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
        <Card.Header>
          <Card.Title>ログアウトしますか？</Card.Title>
        </Card.Header>
        <Card.Body>
        <Button variant="outline" colorScheme="blackAlpha"
             onClick={() => signOut({ callbackUrl:"http://localhost:3000"})}>       
                ログアウト
            </Button>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
        </Card.Footer>
      </Card.Root>
  );
};
  
  export default LogoutForm;
  