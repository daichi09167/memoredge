import { PrismaClient } from "@prisma/client";

declare global {
  // グローバル変数に PrismaClient を型宣言
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;