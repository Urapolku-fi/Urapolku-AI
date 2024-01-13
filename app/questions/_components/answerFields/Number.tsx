import { useRef } from "react";
import styles from "./Number.module.css";

interface AgreeDisagreeProps {
  onSelect: (index: number) => void;
}

const BUTTON_COUNT = 10;

function Number({ onSelect }: AgreeDisagreeProps) {
  const buttons = useRef<HTMLButtonElement[]>([]);

  const onClick = (index: number) => {
    buttons.current.forEach((button) =>
      button.classList.remove(styles.selected)
    );
    buttons.current[index].classList.add(styles.selected);
    onSelect(index);
  };

  return (
    <div className={styles.container}>
      {Array.from({ length: BUTTON_COUNT }, (_, i) => (
        <button
          className={styles.button}
          onClick={() => onClick(i)}
          key={i}
          ref={(el) => (buttons.current[i] = el!)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Number;
