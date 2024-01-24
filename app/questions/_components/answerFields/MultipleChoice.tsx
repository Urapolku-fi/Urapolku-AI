"use client";
import styles from "./MultipleChoice.module.css";
import { MouseEvent } from "react";

interface MultipleChoiceProps {
  onSelect: (index: number) => void;
  options: string[];
  questionTitle: string;
}

function MultipleChoice({
  onSelect,
  options,
  questionTitle,
}: MultipleChoiceProps) {
  const onClick = (e: MouseEvent<HTMLSpanElement>, index: number) => {
    e.stopPropagation();

    onSelect(index);
  };

  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <span
          className={styles.option}
          onClick={(e) => onClick(e, index)}
          key={index}
        >
          <input id={questionTitle + option + index} type="checkbox" />
          <label
            onClick={(e) => e.stopPropagation()}
            htmlFor={questionTitle + option + index}
            className={styles.option}
          >
            {option}
          </label>
        </span>
      ))}
    </div>
  );
}

export default MultipleChoice;
