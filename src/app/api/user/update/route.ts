import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // prismaのインスタンスをインポート

export async function PUT(request: Request) {
  const { username, email } = await request.json();

  if (!username || !email) {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { name: username },
    });

    return NextResponse.json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to update user" }, { status: 500 });
  }
}
