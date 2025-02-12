"use client";
import React from "react";
import { Button, Card,} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const CardWithForm2: React.FC = () => (
  
    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
      <Card.Header>
        <Card.Title>MemorEdgeにログインしよう</Card.Title>
        <Card.Description>
         Let&apos;s sign in with your Google account.
        </Card.Description>
      </Card.Header>
      <Card.Body>
      <Button  variant="outline" colorScheme="blackAlpha"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>       
         <Image src="/google-logo.svg" alt="Google Logo" width="20" height="20" />
          Googleでログイン
          </Button>
      </Card.Body>
      <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
      </Card.Footer>
    </Card.Root>
);

export default CardWithForm2;
