"use client";
import React, { useEffect, useState } from 'react';
import HomeNavber from '@/components/ui/HomeHeader';
import Sidebar from '@/components/ui/HomeSidebar'; 
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
      // ここではセッションの取得例を示していますが、実際の方法は NextAuth.js の API を使って取得してください。
      const sessionResponse = await fetch("/api/auth/session");
      const sessionData = await sessionResponse.json();
      if (sessionData?.user?.id) {
        setUserId(sessionData.user.id);
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
  const handleDelete = async (id: number) => {
    try {
      // データベースから削除（API リクエストを送る）
      await fetch(`/api/questions/`, { method: "DELETE" });

      // フロントエンド側で削除処理
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    } catch (error) {
      console.error("削除エラー:", error);
    }
  };

  return (
    <Box>
      {/* ヘッダー */}
      <SessionProvider>
      <HomeNavber />
      </SessionProvider>
      <Flex>
        {/* サイドバー */}
        <Box  width={{ base: "100%", md: "20%" }}bg="gray.50">
          <Sidebar />
        </Box>

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
                    onDelete={handleDelete}
                    
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
