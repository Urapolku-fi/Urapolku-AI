import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Heading from "@/components/heading/heading";
import Steps from "./_components/steps";
import ImageCard from "./_components/imageCard";
import TextLoop from "@/components/textLoop/textLoop";

export default function Home() {
  const texts = [
    "Can't decide what's the best fit for YOU?",
    "What university can lead to your dream job?",
    "Looking for a career change?",
    "Say hello to Urapolku AI!"
  ];



  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <TextLoop texts={texts} />
          <p className={styles.heroDescription}>
            Only 10 min away from finding the career which suits your
            personality and interests.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImageLarge}
            src="/network-lg.png"
            alt=""
            width={800}
            height={800}
          />
          <Image
            className={styles.heroImageSmall}
            src="/network-sm.png"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className={styles.jumbotronContainer}>
        <Heading>Urapolku AI</Heading>
        <p>
          Only 10 min away from finding the career which suits your personality
          and interests.
        </p>
        <Button variant="rounded" outline>
          Find your Career Path in three simple steps &rarr;
        </Button>
      </section>
      <section className={styles.stepsContainer}>
        <Steps />
      </section>
      <section className={styles.imageCardsContainer}>
        <ImageCard
          src="/temp/school.webp"
          title="Search for your dream university"
          alt="Search for your dream university"
        />
        <ImageCard
          src="/temp/school.webp"
          title="Get to know the job that fits you"
          alt="Get to know the job that fits you"
        />
        <ImageCard
          src="/temp/school.webp"
          title="Looking for a career change?"
          alt="Looking for a career change?"
        />
      </section>
      <section className={styles.questionContainer}>
        <h2>Can&apos;t decide what&apos;s the best fit for YOU?</h2>
        <Button variant="rounded">Ask Urapolku AI &rarr;</Button>
      </section>
    </main>
  );
}
