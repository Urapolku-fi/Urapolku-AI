"use client";
import { forwardRef } from "react";
import { IQuestion, QuestionType } from "../questions";
import AgreeDisagree from "./answerFields/AgreeDisagree";
import Dropdown from "./answerFields/Dropdown";
import MultipleChoice from "./answerFields/MultipleChoice";
import Number from "./answerFields/Number";
import YesNo from "./answerFields/YesNo";

import styles from "./Question.module.css";

interface QuestionProps {
  question: IQuestion;
  onSelect?: (index: number) => void;
}

function Question({ question, onSelect }: QuestionProps) {
  return (
    <section className={styles.container}>
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
      return (
        <MultipleChoice
          onSelect={onSelect}
          questionTitle={question.title}
          options={question.answers ?? []}
        />
      );
    case QuestionType.YesNo:
      return <YesNo onSelect={onSelect} questionTitle={question.title} />;
    case QuestionType.Dropdown:
      return (
        <Dropdown
          onSelect={onSelect}
          options={question.answers ?? ["No options"]}
        />
      );
    case QuestionType.Number:
      return <Number onSelect={onSelect} />;
    default:
      return <div>Unknown</div>;
  }
}

export default Question;
