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
    options: {
      control: {
        type: "array",
      },
    },
  },
};

export const Default = (args: any) => {
  const question: IQuestion = {
    title: args.title ?? "What is your preferred work setting?",
    kind: QuestionType.MultipleChoice,
    answers: args.options ?? ["Remote", "Office", "Hybrid"],
  };

  return <Question question={question} />;
};
