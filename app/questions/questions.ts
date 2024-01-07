/**
 * Represents a question.
 *
 * @param title The question's title.
 * @param description The question's description.
 * @param kind The type of question.
 * @param answers The possible answers to the question.
 */
export interface IQuestion {
  title: string;
  description?: string;
  kind: QuestionType;
  answers?: string[];
}

/**
 * The type of question.
 * - AgreeDisagree: The user can select "Agree" or "Disagree".
 * - MultipleChoice: The user can select multiple answers from a list.
 * - YesNo: The user can select "Yes" or "No".
 * - Number: The user can enter a number on a scale from 1 to 10.
 * - Dropdown: The user can select one answer from a list
 */
export enum QuestionType {
  AgreeDisagree = "AgreeDisagree",
  MultipleChoice = "MultipleChoice",
  YesNo = "YesNo",
  Number = "Number",
  Dropdown = "Dropdown",
}

export const questions: IQuestion[] = [
  {
    title:
      "Working in a team is more appealing to me than working independently.",
    description: "This is a description for the question.",
    kind: QuestionType.AgreeDisagree,
  },
  {
    title: "Which of these languages do you know how to use?",
    kind: QuestionType.MultipleChoice,
    answers: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Do you enjoy working with people?",
    kind: QuestionType.YesNo,
  },
  {
    title: "On a scale from 1 to 10, how much do you enjoy programming?",
    kind: QuestionType.Number,
  },
  {
    title: "Which of these factors is most important in your ideal job?",
    kind: QuestionType.Dropdown,
    answers: ["Salary", "Work-life balance", "Job security", "Location"],
  },
];
