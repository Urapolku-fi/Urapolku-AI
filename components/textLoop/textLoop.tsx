"use client";
import { useEffect, useState } from "react";
import Heading from "../heading/heading";
import styles from "./textLoop.module.css";
import { useAnimate } from "framer-motion";
import sleep from "@/lib/sleep";
import Button from "../button/button";

interface TextLoopProps {
  texts: string[];
}

function TextLoop({ texts }: TextLoopProps) {
  const [text, setText] = useState(texts[0]);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const performSwap = async (textToChange: string) => {
      await animate(
        "h1",
        { transform: "translateY(0)", opacity: 1 },
        { duration: 0, delay: 0.5 }
      );
      await animate(
        "h1",
        { transform: "translateY(150px)", opacity: 0 },
        { duration: 0.25, delay: 2 }
      );
      setText(textToChange);
    };

    (async () => {
      for (let i = 0; i < texts.length - 1; i++) {
        await performSwap(texts[i + 1]);
      }

      animate(
        "h1",
        { transform: "translateY(0)", opacity: 1 },
        { duration: 0, delay: 0.5 }
      );

      await animate(
        "button",
        { transform: "scaleX(100%)", opacity: 1 },
        { duration: 0.75, delay: 0.5 }
      );
    })();
  }, [animate, texts]);

  return (
    <div ref={scope}>
      <Heading>{text}</Heading>
      <Button className={styles.button} variant="rounded">
        Find your career path &rarr;
      </Button>
    </div>
  );
}

export default TextLoop;
