import styles from "./steps.module.css";

function Steps() {
  return (
    <div className={styles.container}>
      <div className={styles.ballContainer}>
        <div className={styles.ball}>1</div>
        <p>
          Only 10 min away from finding your own career path which suits your
          personality and interests.
        </p>
      </div>
      <div className={styles.ballContainer}>
        <div className={styles.ball}>2</div>
        <p>
          Only 10 min away from finding your own career path which suits your
          personality and interests.
        </p>
      </div>
      <div className={styles.ballContainer}>
        <div className={styles.ball}>3</div>
        <p>
          Only 10 min away from finding your own career path which suits your
          personality and interests.
        </p>
      </div>
      <span className={styles.dashedLine}></span>
    </div>
  );
}

export default Steps;
