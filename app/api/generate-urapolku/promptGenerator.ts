import { QuestionType, questions } from "@/app/questions/questions";

const prompt = `You are an advanced career finding AI. You have been tasked with finding a career for a human. You are given a set of questions and responses collected from the user. Your goal is to find a career that best fits the user's responses.
Please give the response using the following json format without any extra characters or spaces. The response should be a stringified json object with the following format. Do not output anything else. Only give the json:
###
{
  // 5 sets of percentages (0.00-1.00)
  percentages: { name: string; score: number }[];
  // 3 paths with a name and a score (0.00-1.00)
  paths: { name: string; score: number }[];
}
###
---
`;

export const promptVersion = 1;

const agreeDisagreeScale = [
  "Neutral",
  "Strongly agree",
  "Agree",
  "Slightly agree",
  "Slightly disagree",
  "Disagree",
  "Strongly disagree",
];

interface Answers {
  question: string;
  answer: string | string[] | number;
}

export function reconstructAnswers(answers: {
  [key: number]: number | number[];
}): Answers[] {
  let constructedAnswers: Answers[] = [];
  const keys = Object.keys(answers);

  for (const index in keys) {
    const question = questions[parseInt(index)];
    let answer: string | string[] | number = "ERROR";
    const answerIndex = answers[parseInt(index)];

    if (question.kind === QuestionType.AgreeDisagree) {
      answer = agreeDisagreeScale[answerIndex as number];
    } else if (question.kind === QuestionType.MultipleChoice) {
      answer = question.answers!.filter((_, index) =>
        (answerIndex as number[]).includes(index)
      );
    } else if (question.kind === QuestionType.YesNo) {
      answer = answerIndex === 0 ? "Yes" : "No";
    } else if (question.kind === QuestionType.Number) {
      answer = answerIndex as number;
    } else if (question.kind === QuestionType.Dropdown) {
      answer = question.answers![answerIndex as number];
    }

    constructedAnswers.push({ question: question.title, answer });
  }

  return constructedAnswers;
}

/**
 * Constructs a prompt and answer string based on the provided answers.
 * @param answers An array of answer objects.
 * @returns A tuple containing the system message and the user message.
 */
export function constructPrompt(answers: Answers[]): [string, string] {
  const answerStrings = answers.map((answer) => {
    if (typeof answer.answer === "string") {
      return `**${answer.question}**: ${answer.answer}`;
    } else if (typeof answer.answer === "number") {
      return `**${answer.question}**: ${answer.answer}`;
    } else {
      return `**${answer.question}**: ${answer.answer.join(", ")}`;
    }
  });

  return [prompt, answerStrings.join("\n")];
}
