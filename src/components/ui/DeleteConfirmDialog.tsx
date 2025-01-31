"use client";

import { Box, Button, Text } from "@chakra-ui/react";

type DeleteConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export default function DeleteConfirmDialogmessage({ isOpen, onClose, onDelete }: DeleteConfirmDialogProps) {
  if (!isOpen) return null;

  return (
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
        <Text mb={4}>本当にこのカードを消しますか？</Text>
        <Box display="flex" justifyContent="flex-end">
          <Button onClick={onClose} mr={2}>
            キャンセル
          </Button>
          <Button colorScheme="red" onClick={onDelete}>
            削除
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

