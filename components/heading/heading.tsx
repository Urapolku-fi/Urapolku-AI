import classMerge from "@/lib/classMerge";
import styles from "./heading.module.css";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

function Heading(props: HeadingProps) {
  return (
    <h1 className={classMerge(styles.heading, props.className)}>
      {props.children}
    </h1>
  );
}

export default Heading;
