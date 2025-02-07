import React from 'react';
import { Center, Stack, Text, Link} from "@chakra-ui/react";

// フッターのコンポーネント
const Footer = () => {
  return (
    <Center>
      <Stack>
        <Link href="/privacy-policy">プライバシーポリシー</Link>
        <Text>© 2025 daichi09167</Text>
      </Stack>
    </Center>
  );
};

export default Footer;