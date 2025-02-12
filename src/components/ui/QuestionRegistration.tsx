"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Textarea, Card, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useSession } from "next-auth/react"; // useSession をインポート

export default function QuestionRegisterPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState(""); // メッセージ表示用
  const [messageType, setMessageType] = useState(""); // メッセージの種類 (success or error)
  const router = useRouter();
  // NextAuthでセッションを取得
  const { data: session} = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question || !answer) {
      setMessage("両方のフィールドを入力してください。");
      setMessageType("error");
      return;
    }

     // ユーザーがログインしていない場合、エラーメッセージを表示
     if (!session?.user?.id) {
      setMessage("ログインしていないユーザーです。ログインしてください。");
      setMessageType("error");
      return;
    }

    

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer , userId: session.user.id }), // userId をセッションから取得
      });

      if (response.ok) {
        setMessage("問題と回答が正常に登録されました。");
        setMessageType("success");
        setTimeout(() => router.push("/dashboard"), 3000); // 成功後ダッシュボードへ遷移
      } else {
        setMessage("登録に失敗しました。再度試してください。");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("エラーが発生しました。再度お試しください。");
      setMessageType("error");
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

            {/* メッセージ表示 */}
            {message && (
              <Text color={messageType === "success" ? "green.500" : "red.500"}>
                {message}
              </Text>
            )}
          </Stack>
        </Card.Body>
        <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="solid" colorScheme="blackAlpha"
            onClick={handleSubmit}
          >
            登録する
          </Button>
          <Button variant="surface" colorScheme="blackAlpha"
            onClick={handleCancel}
          >
            キャンセル
          </Button>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}
