"use client";

import { Box, Text } from "@chakra-ui/react";

type QuestionCardProps = {
  id: number;
  question: string;
  answer: string;
  flipped: boolean;
  onClick: () => void;
};

export function QuestionCard({ id, question, answer, flipped, onClick }: QuestionCardProps) {
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
        <Text fontSize="lg" fontWeight="bold">
          {question}
        </Text>
      </Box>
      {/* 裏面 */}
      <Box
        position="absolute"
        transform="rotateY(180deg)"
        display={flipped ? "block" : "none"}
      >
        <Text fontSize="lg" fontWeight="bold">
          {answer}
        </Text>
      </Box>
    </Box>
  );
}
export default QuestionCard;