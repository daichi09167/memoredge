import React from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { Highlight } from "@chakra-ui/react";

interface CenteredHeadingProps {
  text: string;
  subText: string;
}

const CenteredHeading: React.FC<CenteredHeadingProps> = ({ text, subText }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // ビューポート全体の高さ
        textAlign: 'center', // テキスト中央揃え
        padding: '20px',
      }}
    >
      <main>
        <Stack gap="2" align="center">
          <Heading size="5xl">{text}</Heading>
          <Heading size="xl">{subText}</Heading>
        <p>
        <Highlight
        query={["MemorEdge(メモレッジ)", "暗記学習", "アウトプット", "記憶を定着", "学習効果"]}
        styles={{ px: "0.5", bg: "teal.muted" }}>
            MemorEdge(メモレッジ)では、単語学習やその他の問題・回答を登録することで、暗記学習を促進し、アウトプットを加速させます。効率的に記憶を定着させ、学習効果を最大化するための最適なサポートを提供します。
         </Highlight>
        </p>
        </Stack>
      </main>
    </div>
  );
};

export default CenteredHeading;
