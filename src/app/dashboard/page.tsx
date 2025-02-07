"use client";
import React, { useEffect, useState } from 'react';
import HomeNavber from '@/components/ui/HomeHeader';
import { Stack ,Box, Text, Flex, IconButton} from "@chakra-ui/react";
import { Flipper, Flipped } from "react-flip-toolkit";
import QuestionCard  from "@/components/ui/QuestionCard";
import { SimpleGrid } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react";

// データ型
type Question = {
  id: number;
  question: string;
  answer: string;
};

const DashboardPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [userId, setUserId] = useState<number | null>(null);  // userId を状態として管理




  // 例: NextAuth.js を使ってユーザーのセッション情報から userId を取得する
  useEffect(() => {
    const fetchUserId = async () => {
      try{
      const sessionResponse = await fetch("/api/auth/session");
        // レスポンスが空でないか確認
    if (!sessionResponse.ok || sessionResponse.status === 204) {
      throw new Error('No session or empty response');
    }

      if (!sessionResponse.ok) {
        throw new Error('Failed to fetch session');
      }
  
      const sessionData = await sessionResponse.json();
      if (sessionData?.user?.id) {
        setUserId(sessionData.user.id);
      }
    }
      catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchUserId();
  }, []);

  // データの取得
  useEffect(() => {
    const fetchQuestions = async () => {
      if (!userId) return; // userId がない場合はリクエストしない
      
      try {
        const response = await fetch(`/api/questions?userId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        } else {
          console.error("Failed to fetch questions");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [userId]);

  // カードのフリップトグル
  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const handleDelete = async (id: number, question: string, answer: string, userId: number) => {
    try {
      // 削除対象の質問データをAPIリクエストに送信
      const response = await fetch('/api/questions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer, userId }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // 削除成功後、質問リストを更新
        setQuestions((prev) => prev.filter((q) => q.id !== id));
        console.log('質問が削除されました:', data);
      } else {
        console.error('削除失敗:', data);
      }
    } catch (error) {
      console.error('削除エラー:', error);
    }
  };
  
  
  
  
  return (
    <Box>
      {/* ヘッダー */}
      <SessionProvider>
      <HomeNavber />
      </SessionProvider>
      <Flex>
        
        {/* メインコンテンツ */}
        <Box flex="1" padding={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            登録された問題一覧
          </Text>
          <Flipper flipKey={JSON.stringify(flipped)}>
            <SimpleGrid 
            minChildWidth={{ base: "100%", sm: "200px", md: "250px", lg: "300px" }}gap="20px">
              {questions.map((q) => (
                <Flipped key={q.id} flipId={`card-${q.id}`}>
                  <QuestionCard
                    id={q.id}
                    question={q.question}
                    answer={q.answer}
                    flipped={!!flipped[q.id]}
                    onClick={() => toggleFlip(q.id)}
                    onDelete={(id, question, answer) => handleDelete(id, question, answer, userId!)}
                    
                    />
                </Flipped>
             
              ))}
            </SimpleGrid>
          </Flipper>
        </Box>
      </Flex>
      
    </Box>
  );
};

export default DashboardPage;
