import Image from "next/image";
import styles from "./imageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
}

function ImageCard(props: ImageCardProps) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={props.src} alt={props.alt} width={308} height={400} />
      <p className={styles.text}>{props.title}</p>
      <div className={styles.overlay}/>
    </div>
  );
}

export default ImageCard;
