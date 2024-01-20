import styles from "./NumberedCard.module.css";

interface NumberedCardProps {
  number: number;
  children?: React.ReactNode;
}

function NumberedCard({ number, children }: NumberedCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default NumberedCard;
