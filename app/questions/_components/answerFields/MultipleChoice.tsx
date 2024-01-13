import styles from "./MultipleChoice.module.css";

interface MultipleChoiceProps {
  onSelect?: (index: number) => void;
  options: string[];
  questionTitle: string;
}

function MultipleChoice({
  onSelect,
  options,
  questionTitle,
}: MultipleChoiceProps) {
  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <span
          onClick={() => onSelect?.(index)}
          className={styles.option}
          key={index}
        >
          <input id={questionTitle + option + index} type="checkbox" />
          <label
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
