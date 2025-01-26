import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Icon,
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons';
  
  export default function HomeSidebar() {
    return (
      <Flex
        direction="column"
        alignItems="center"
        w="370px" // 幅を指定
        h="819px" // 高さを指定
        bg="gray.100" // 背景色を調整
        p={4} // 余白を調整
      >
        <InputGroup mb={4}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <Flex direction="column" alignItems="center">
          <Button colorScheme="orange" variant="solid" mb={2}>
            クイズ作成
          </Button>
          <Button colorScheme="orange" variant="solid">
            登録する
          </Button>
        </Flex>
      </Flex>
    );
  }