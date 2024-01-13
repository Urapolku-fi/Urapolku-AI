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
    title: args.title ?? "Do you have experience in leadership roles?",
    kind: QuestionType.YesNo,
  };

  return <Question question={question} />;
};
