import React from 'react';
import Link from "next/link"; // Link コンポーネントのインポート
import { Center, Stack, Text} from "@chakra-ui/react";

// フッターのコンポーネント
const Footer = () => {
  return (
    <Center>
      <Stack>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Text>© 2025 daichi</Text>
      </Stack>
    </Center>
  );
};

export default Footer;