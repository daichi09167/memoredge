"use client";

import { Box, Text, IconButton ,Stack} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

type QuestionCardProps = {
  id: number;
  question: string;
  answer: string;
  flipped: boolean;
  onClick: () => void;
  onDelete: (id: number) => void;
};

export function QuestionCard({ id, question, answer, flipped, onClick, onDelete }: QuestionCardProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    if (window.confirm("本当に削除しますか？")) {
        console.log("Deleting question:", question, "Answer:", answer);  // question と answer をログに出力
      try {
        const response = await fetch(`/api/questions`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, answer }), // `question` と `answer` を送信
        });
        const responseBody = await response.text(); // レスポンスをテキストとして取得
        console.log("Response body:", responseBody); // レスポンス内容を表示
  
        if (response.ok) {
            onDelete(id);
            setShowConfirm(false);
          } else {
            console.error("削除に失敗しました:", responseBody); // エラーメッセージを表示
          }
        } catch (error) {
          console.error("削除中にエラーが発生しました:", error);
        }
    }
  };
  

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      width="300px"
      height="200px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {/* 表面 */}
      <Box position="absolute" backfaceVisibility="hidden" display={!flipped ? "block" : "none"}>
        <Stack gap={4} >
        <Text fontSize="lg" fontWeight="bold">
          {question}
        </Text>
         {/* ゴミ箱アイコン */}
      <IconButton
        aria-label="Delete question"
        position="fixed"
        variant="surface"
        right="0"
        bottom="0"
        size="sm"
        onClick={(e) => {
          e.stopPropagation(); // カードフリップイベントを防ぐ
          handleDelete();
        }}>
        <MdDelete />
        </IconButton>
        </Stack>
        </Box>
      {/* 裏面 */}
      <Box position="absolute" transform="rotateY(180deg)" display={flipped ? "block" : "none"}>
        <Text fontSize="lg" fontWeight="bold">
          {answer}
        </Text>
        </Box>

    {/* 削除確認ダイアログ */}
      {showConfirm && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box bg="white" p={4} borderRadius="md" boxShadow="lg">
            <Text mb={4}>本当に削除しますか？</Text>
            <Box display="flex" justifyContent="flex-end">
              <button onClick={() => setShowConfirm(false)} style={{ marginRight: "8px" }}>
                いいえ
              </button>
              <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
                はい
              </button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default QuestionCard;
