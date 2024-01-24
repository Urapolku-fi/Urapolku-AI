import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { reconstructAnswers } from "./promptGenerator";

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await request.json();

  console.log(body);
  const answers = reconstructAnswers(body);

  return NextResponse.json(answers, { status: 200 });
}
