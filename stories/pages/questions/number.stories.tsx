import Question from "@/app/questions/_components/Question";
import { IQuestion, QuestionType } from "@/app/questions/questions";

export default {
  component: Question,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
  },
};

export const Default = (args: any) => {
  const question: IQuestion = {
    title:
      args.title ??
      "Rate your interest in pursuing a career change on a scale of 1 to 10.",
    kind: QuestionType.Number,
  };

  return <Question question={question} />;
};
