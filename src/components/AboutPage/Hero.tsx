import { useTranslation } from "next-i18next";
import styles from "../../styles/AboutPageStyles/Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation("about");

  const title = t("hero.title");
  const highlightWords = t("hero.highlight", { returnObjects: true }) as string[];
  const formatTitle = (text: string, highlights: string[]) => {
    return text.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, "");

      return highlights.includes(cleanWord) ? (
        <span key={index} className={styles.highlight}>
          {word}{" "}
        </span>
      ) : (
        <span key={index}>{word} </span>
      );
    });
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{formatTitle(title, highlightWords)}</h1>
    </section>
  );
};

export default Hero;
