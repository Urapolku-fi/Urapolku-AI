"use client";
import { MouseEvent, useRef } from "react";
import styles from "./YesNo.module.css";

interface YesNoProps {
  onSelect?: (index: number) => void;
  questionTitle: string;
}

function YesNo({ onSelect, questionTitle }: YesNoProps) {
  const onClick = (e: MouseEvent<HTMLSpanElement>, index: number) => {
    e.stopPropagation();
    onSelect?.(index);
  };

  return (
    <div className={styles.container}>
      {["Yes", "No"].map((option, index) => (
        <span
          onClick={(e) => onClick(e, index)}
          className={styles.option}
          key={index}
        >
          <input
            id={questionTitle + option + index}
            type="radio"
            name={questionTitle}
          />
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

export default YesNo;
