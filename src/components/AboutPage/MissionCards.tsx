import { useTranslation } from "next-i18next";
import styles from "../../styles/AboutPageStyles/Mission.module.scss";

const MissionCards = () => {
  const { t } = useTranslation("about");

  const missions = [
    {
      key: "statement",
      icon: "/images/about-us-card-icon1.png",
    },
    {
      key: "story",
      icon: "/images/about-us-card-icon2.png",
    },
    {
      key: "expertise",
      icon: "/images/about-us-card-icon3.png",
    },
    {
      key: "values",
      icon: "/images/about-us-card-icon4.png",
    },
  ];

  const renderHighlightedText = (text: string, highlights: string[]) => {
    const regex = new RegExp(`(${highlights.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      highlights.includes(part) ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className={styles.missionCards}>
      {missions.map((mission, index) => {
        const title = t(`missionCards.${mission.key}.title`);
        const description = t(`missionCards.${mission.key}.description`);
        const highlights = t(`missionCards.${mission.key}.highlight`, {
          returnObjects: true,
        }) as string[];

        return (
          <div key={index} className={styles.card}>
            <img src={mission.icon} alt={`${title} icon`} className={styles.icon} />
            <h3 className={styles.cardHeading}>
              {renderHighlightedText(title, highlights)}
            </h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default MissionCards;

