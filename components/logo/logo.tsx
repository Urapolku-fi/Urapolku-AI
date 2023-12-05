import Image from "next/image";
import styles from "./logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/logo.png"
        alt="Ai"
        width={25}
        height={25}
      />
      <h1 className={styles.text}>UrapolkuAI</h1>
    </div>
  );
}

export default Logo;
