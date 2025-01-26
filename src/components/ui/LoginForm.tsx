import React from "react";
import { Button, Card, Input, Stack, Box } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox"
import { PasswordInput } from "./password-input"

export const CardWithForm2: React.FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
  >
    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
      <Card.Header>
        <Card.Title>MemorEdgeにログインしよう</Card.Title>
        <Card.Description>
         Fill in the form below to log in.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap={4} width="full">
          {/* メールアドレス */}
          <Field label="メールアドレス">
            <Input type="email"  placeholder="XXXXX@com"/>
          </Field>

          {/* パスワード */}
          <Field label="パスワード">
            <PasswordInput />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
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
          }}>       
            ログインする
          </Button>
      </Card.Footer>
    </Card.Root>
  </Box>
);

export default CardWithForm2;
