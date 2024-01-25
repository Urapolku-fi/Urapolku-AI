import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {
  constructPrompt,
  promptVersion,
  reconstructAnswers,
} from "./promptGenerator";
import { xxHash32 } from "js-xxhash";
import { db } from "../_lib/db";
import { ai } from "../_lib/ai";

export async function POST(request: Request) {
  const { userId } = auth();

  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const answers = await reconstructAnswers(body);
  const hash = xxHash32(JSON.stringify(answers), 0).toString(16);
  const [system, client] = constructPrompt(answers);

  const existing = await db.answers.findFirst({
    where: { hash, promptVersion },
  });

  if (existing) {
    return NextResponse.json(
      { answers, hash, cached: true, response: existing.results },
      { status: 200 }
    );
  }

  const response = await ai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content: client,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  await db.answers.create({
    data: {
      hash,
      promptVersion,
      answers: JSON.stringify(answers),
      results: JSON.stringify(response.choices[0].message),
    },
  });

  return NextResponse.json(
    { answers, hash, cached: false, response: response.choices[0].message },
    { status: 200 }
  );
}
