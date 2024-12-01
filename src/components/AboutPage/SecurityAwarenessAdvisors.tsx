import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/AboutPageStyles/SecurityAwarenessAdvisors.module.scss";

const SecurityAwarenessAdvisors = () => {
  const { t } = useTranslation("about");
  const members = t("securityAwarenessAdvisors.members", { returnObjects: true }) as Array<{
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

  return (
    <section className={styles.cybersecuritySpecialists}>
      <h2>{t("securityAwarenessAdvisors.title")}</h2>
      <div
        className={`${styles.membersWrapper} ${
          activeBio !== null ? styles.hasActiveCard : ""
        }`}
      >
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
                  ? index === 2
                    ? "translateX(-900px)"
                    : index === 0
                    ? "translateX(-80px)"
                    : "translateX(-500px)"
                  : "translateX(0)",
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
      <button className={styles.ctaButton}>{t("securityAwarenessAdvisors.cta")}</button>
    </section>
  );
};

export default SecurityAwarenessAdvisors;
