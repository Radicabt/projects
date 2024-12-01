import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/AboutPageStyles/Founders.module.scss";

const FoundersSection = () => {
  const { t } = useTranslation("about");
  const members = t("founders.members", { returnObjects: true }) as Array<{
    image: string;
    name: string;
    role: string;
    description: string;
    bio: string;
  }>;

  const [activeBio, setActiveBio] = useState<number | null>(null);

  const handleArrowClick = (index: number) => {
    setActiveBio(activeBio === index ? null : index);
  };

  useEffect(() => {
    if (activeBio !== null) {
      document.body.classList.add("active-card");
    } else {
      document.body.classList.remove("active-card");
    }

    return () => {
      document.body.classList.remove("active-card"); 
    };
  }, [activeBio]);

  return (
    <section className={styles.founders}>
      <h2>{t("founders.title")}</h2>
      <p>{t("founders.subtitle")}</p>
      <div className={`${styles.membersWrapper}`}>
        {members.map((member, index) => {
          const isActive = activeBio === index;

          return (
            <div
              key={index}
              className={`${styles.memberCard} ${
                isActive ? styles.activeCard : ""
              }`}
              style={{
                transform: isActive
                  ? index === 1
                    ? "translateX(-700px)"
                    : index === 0
                    ? "translateX(-280px)"
                    : "translateX(0px)"
                  : "",
              }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={391}
                  height={341}
                  className={styles.leaderImage}
                />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
              <div className={styles.rectangleWrapper}>
                <Image
                  src="/images/Rectangle.png"
                  alt="Card Rectangle"
                  width={391}
                  height={30}
                  className={styles.rectangle}
                />
              </div>
              <button
                className={styles.arrowButton}
                onClick={() => handleArrowClick(index)}
                aria-label={isActive ? "Close Bio" : "Open Bio"}
              >
                <div className={styles.arrowCircle}>
                  <Image
                    src="/images/leadership-arrow.png"
                    alt="Arrow Icon"
                    width={66}
                    height={64}
                    className={isActive ? styles.arrowClose : ""}
                  />
                </div>
              </button>

              {isActive && (
                <div className={styles.bioOverlay}>
                  <Image
                    src="/images/bio-overlay.png"
                    alt="Bio Overlay Background"
                    layout="fill"
                    objectFit="cover"
                    className={styles.bioOverlayImage}
                  />
                  <div className={styles.bioContent}>
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                    <div className={styles.bioDescription}>
                      {member.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FoundersSection;
