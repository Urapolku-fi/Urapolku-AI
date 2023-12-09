import styles from "./heading.module.css";

interface HeadingProps {
  children: React.ReactNode;
}

function Heading(props: HeadingProps) {
  return ( <h1 className={styles.heading}>{props.children}</h1> );
}

export default Heading;