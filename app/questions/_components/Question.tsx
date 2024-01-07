import { IQuestion, QuestionType } from "../questions";
import AgreeDisagree from "./answerFields/AgreeDisagree";

import styles from "./Question.module.css";

interface QuestionProps {
  question: IQuestion;
  onSelect?: (index: number) => void;
}

function Question({ question, onSelect }: QuestionProps) {
  return (
    <section className="">
      <p className={styles.heading}>{question.title}</p>
      {getAnswerField(question, onSelect ?? (() => {}))}
    </section>
  );
}

function getAnswerField(
  question: IQuestion,
  onSelect: (index: number) => void
) {
  switch (question.kind) {
    case QuestionType.AgreeDisagree:
      return <AgreeDisagree onSelect={onSelect} />;
    case QuestionType.MultipleChoice:
      return <div>MultipleChoice</div>;
    case QuestionType.Dropdown:
      return <div>Dropdown</div>;
    case QuestionType.Number:
      return <div>Number</div>;
    case QuestionType.YesNo:
      return <div>YesNo</div>;
    default:
      return <div>Unknown</div>;
  }
}

export default Question;
