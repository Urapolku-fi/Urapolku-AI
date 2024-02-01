"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/button/button";
import NumberedCard from "./_components/NumberedCard";
import Question from "./_components/Question";
import styles from "./page.module.css";
import { isSingleAnswerQuestion, questions } from "./questions";
import { useRef } from "react";

function Questions() {
  const router = useRouter();
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const answersObject = useRef<{ [key: number]: number | number[] }>({});

  const onSubmit = async () => {
    window.sessionStorage.setItem(
      "answers",
      JSON.stringify(answersObject.current)
    );

    router.push("/waiting");
  };

  const onSelect = (questionId: number, answerId: number) => {
    const question = questions[questionId];

    if (isSingleAnswerQuestion(question)) {
      answersObject.current[questionId] = answerId;
    } else {
      if (answersObject.current[questionId] === undefined) {
        answersObject.current[questionId] = [];
      }

      let answers = answersObject.current[questionId] as number[];

      if (answers.includes(answerId)) {
        answers = answers.filter((answer) => answer !== answerId);
      } else {
        answers.push(answerId);
      }
    }

    questionRefs.current[questionId + 1]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className={styles.cardsContainer}>
        <NumberedCard number={1}>
          <p>
            Only 10 min away from finding your own career path which suits your
            personality and interests.
          </p>
        </NumberedCard>
        <NumberedCard number={2}>
          <p>
            Only 10 min away from finding your own career path which suits your
            personality and interests.
          </p>
        </NumberedCard>
        <NumberedCard number={3}>
          <p>
            Only 10 min away from finding your own career path which suits your
            personality and interests.
          </p>
        </NumberedCard>
      </section>
      <section className={styles.questionsContainer}>
        {questions.map((question, index) => (
          <div key={index} ref={(el) => (questionRefs.current[index] = el)}>
            <Question
              onSelect={(answerId) => {
                onSelect(index, answerId);
              }}
              question={question}
              key={"question" + index}
            />
            <hr key={"hr" + index} />
          </div>
        ))}
      </section>
      <section className={styles.bottomPart}>
        <p>You are doing great!</p>
        <span className={styles.buttonContainer}>
          <Button dark onClick={onSubmit}>
            Next
          </Button>
        </span>
      </section>
    </main>
  );
}

export default Questions;
