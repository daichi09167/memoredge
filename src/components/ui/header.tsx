import React from 'react';
import { Box, Flex, Button, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlinePersonAddAlt, MdOutlineAccountCircle } from 'react-icons/md';

const Header = () => {
  // レスポンシブ対応：モバイルではアイコンボタンを表示
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box bg="teal.500" color="white" px={4} py={2}>
      <Flex justify="space-between" align="center">
        {/* 左側のボタン */}
        <Flex>
          <Button
            leftIcon={<MdOutlinePersonAddAlt />}
            variant="ghost"
            color="white"
            mr={4}
            fontSize="lg"
          >
            Sign Up
          </Button>
          <Button
            leftIcon={<MdOutlineAccountCircle />}
            variant="link"
            color="white"
            fontSize="lg"
          >
            Login
          </Button>
        </Flex>

        {/* 右側の "MemorEdge" */}
        <Text
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="'Futura', sans-serif"
        >
          MemorEdge
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
