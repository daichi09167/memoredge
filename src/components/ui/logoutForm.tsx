"use client";
import React from "react";
import { Button, Card,} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export const LogoutForm: React.FC = () => (

  <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
        <Card.Header>
          <Card.Title>ログアウトしますか？</Card.Title>
          <Card.Description>
             ログアウトすると、MemorEdgeからログアウトします。
          </Card.Description>
        </Card.Header>
        <Card.Body>
        <Button 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: '#FFCF56',
              color: 'black',
              fontWeight: 'bold',
              padding: '5px 10px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }} onClick={() => signOut({ callbackUrl:"http://localhost:3000"})}>       
                ログアウト
            </Button>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
        </Card.Footer>
      </Card.Root>
  );
  
  export default LogoutForm;
  