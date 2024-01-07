import styles from "./MultipleChoice.module.css";

interface MultipleChoiceProps {
  onSelect?: (index: number) => void;
  options: string[];
}

function MultipleChoice({ onSelect, options }: MultipleChoiceProps) {
  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <span className={styles.option} key={index}>
          <input id={option + index} type="checkbox" />
          <label htmlFor={option + index} className={styles.option}>
            {option}
          </label>
        </span>
      ))}
    </div>
  );
}

export default MultipleChoice;
