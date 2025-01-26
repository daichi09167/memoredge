import React from "react";
import { Button, Card, Input, Stack, Box } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox"

export const CardWithForm: React.FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
  >
    <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
      <Card.Header>
        <Card.Title>アカウントを登録してサービスを利用しよう</Card.Title>
        <Card.Description>
          Fill in the form below to create an account
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap={4} width="full">
          {/* ユーザー名 */}
          <Field label="ユーザー名">
            <Input />
          </Field>

          {/* メールアドレス */}
          <Field label="メールアドレス">
            <Input type="email" />
          </Field>

          {/* パスワード */}
          <Field label="パスワード">
            <Input type="password" />
          </Field>

          {/* 利用規約 */}
         <Checkbox>
            <span className="text-sm">利用規約・プライバシーポリシーに同意する</span>
         </Checkbox>
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
          登録する
          </Button>
      </Card.Footer>
    </Card.Root>
  </Box>
);

export default CardWithForm;
