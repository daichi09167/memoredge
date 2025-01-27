"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Textarea, Card } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Toaster, toaster } from "@/components/ui/toaster"

export default function QuestionRegisterPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question || !answer) {
      toaster.create({
        title: "入力エラー",
        description: "両方のフィールドを入力してください。",
        type: "error",
        duration: 3000,
      });
      return;
    }

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
      });

      if (response.ok) {
        toaster.create({
          title: "登録成功",
          description: "問題と回答が正常に登録されました。",
          type: "success",
          duration: 3000,
        });
        router.push("/dashboard");
      } else {
        toaster.create({
          title: "登録失敗",
          description: "再度試してみてください。",
          type: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toaster.create({
        title: "エラー発生",
        description: "問題が発生しました。再度試してください。",
        type: "error",
        duration: 3000,
      });
    }
  };

  const handleCancel = () => {
    router.push("/dashboard");
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
      <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
        <Card.Header>
          <Card.Title>問題と回答を登録してみよう</Card.Title>
          <Card.Description>
            Fill in the form below to register a question and answer.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap={4} width="full">
            {/* 問題 */}
            <Field label="問題">
              <Textarea
                variant="outline"
                placeholder="問題"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Field>

            {/* 回答 */}
            <Field label="回答">
              <Textarea
                variant="outline"
                placeholder="回答"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Field>
          </Stack>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
          <Button
            style={{
              backgroundColor: "#FFCF56",
              color: "black",
              fontWeight: "bold",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            登録する
          </Button>
          <Button
            style={{
              backgroundColor: "#FFCF56",
              color: "black",
              fontWeight: "bold",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            
            onClick={handleCancel}
            
          >
            キャンセル
          </Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}
function useToast() {
    throw new Error("Function not implemented.");
}

