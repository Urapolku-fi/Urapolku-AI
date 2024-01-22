import Image from "next/image";
import styles from "./logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link className={styles.link} href="/">
      <div className={styles.container}>
        <Image
          priority
          className={styles.image}
          src="/logo.png"
          alt="Ai"
          width={25}
          height={25}
        />
        <h1 className={styles.text}>UrapolkuAI</h1>
      </div>
    </Link>
  );
}

export default Logo;
