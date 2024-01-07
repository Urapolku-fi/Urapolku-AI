import Question from "@/app/questions/_components/Question";
import { IQuestion, QuestionType } from "@/app/questions/questions";

export default {
  component: Question,
  theme: "light",
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
      "You prefer to completely finish one project before starting another.",
    kind: QuestionType.AgreeDisagree,
  };

  return <Question question={question} />;
};
