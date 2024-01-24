import { QuestionType, questions } from "@/app/questions/questions";

const prompt = "";

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
