"use client";
import { classMerge as cm } from "@/lib/classMerge";
import styles from "./AgreeDisagree.module.css";
import { MouseEvent, useRef } from "react";

interface AgreeDisagreeProps {
  onSelect: (index: number) => void;
}

const BUTTON_COUNT = 7;

function AgreeDisagree({ onSelect }: AgreeDisagreeProps) {
  const buttons = useRef<HTMLButtonElement[]>([]);

  const onClick = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.stopPropagation();
    buttons.current.forEach((button) =>
      button.classList.remove(styles.selected)
    );
    buttons.current[index].classList.add(styles.selected);
    onSelect(index);
  };

  return (
    <div className={styles.container}>
      <p className={cm(styles.label, styles.agree)}>Agree</p>
      <div className={styles.buttonsContainer}>
        {Array.from({ length: BUTTON_COUNT }, (_, i) => (
          <button
            onClick={(e) => onClick(e, i)}
            className={styles.button}
            key={i}
            ref={(el) => (buttons.current[i] = el!)}
          ></button>
        ))}
      </div>
      <p className={cm(styles.label, styles.disagree)}>Disagree</p>
    </div>
  );
}

export default AgreeDisagree;
