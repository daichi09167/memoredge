/*
  Warnings:

  - A unique constraint covering the columns `[userId,answer,question]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Question_userId_question_key";

-- CreateIndex
CREATE UNIQUE INDEX "Question_userId_answer_question_key" ON "Question"("userId", "answer", "question");
