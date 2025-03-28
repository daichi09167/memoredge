"use client";

import { Box, Text, IconButton ,Stack,useDisclosure} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import DeleteConfirmDialogmessage from "./DeleteConfirmDialog";

type QuestionCardProps = {
  id: number;
  question: string;
  answer: string;
  flipped: boolean;
  onClick: () => void;
  onDelete: (id: number, question: string, answer: string) => void;
};

export function QuestionCard({ id, question, answer, flipped, onClick, onDelete }: QuestionCardProps) {
  const { onOpen, onClose, open} = useDisclosure();
  const handleDelete = () => {
    onDelete(id, question, answer); // 親コンポーネントの削除関数を呼び出す
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
          onOpen();
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

    {/* 削除確認モーダル*/}
       <DeleteConfirmDialogmessage isOpen={open} onClose={onClose} onDelete={handleDelete} />
      </Box>
    );
  }

export default QuestionCard;
