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
    title: args.title ?? "Choose your highest completed level of education.",
    answers: args.options ?? [
      "High School",
      "Associate Degree",
      "Bachelor’s Degree",
      "Master’s Degree",
      "PhD",
      "Trade School",
      "None",
    ],
    kind: QuestionType.Dropdown,
  };

  return <Question question={question} />;
};
