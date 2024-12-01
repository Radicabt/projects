import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/NewsletterPageStyles/Carousel.module.scss";

const Carousel = () => {
  type CarouselItem = {
    subtitle: string;
    date: string;
    title: string;
    description: string;
    buttonText: string;
  };

  const { t } = useTranslation("newsletter");
  const carouselItems = t("relatedNews", { returnObjects: true }) as CarouselItem[];

  const [bookmarks, setBookmarks] = useState<boolean[]>(
    new Array(carouselItems.length).fill(false)
  );

  const toggleBookmark = (index: number) => {
    setBookmarks((prev) =>
      prev.map((isBookmarked, i) => (i === index ? !isBookmarked : isBookmarked))
    );
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselContent}>
        <button className={styles.extraReadMore}>
          {carouselItems[0]?.buttonText || "Read More"}
        </button>
        <div className={styles.carouselContainer}>
          {carouselItems.map((item, index) => (
            <div className={styles.carouselItem} key={index}>
              <div className={styles.itemContent}>
                <div
                  className={styles.bookmarkIcon}
                  onClick={() => toggleBookmark(index)}
                >
                  <img
                    src={
                      bookmarks[index]
                        ? "/images/bookmark-filled.png"
                        : "/images/bookmark.png"
                    }
                    alt="Bookmark Icon"
                  />
                </div>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
                <p className={styles.itemDate}>{item.date}</p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
              <button className={styles.cardButton}>{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselFooter}>
        <div className={styles.carouselLine}>
          <div className={styles.activeLine}></div>
        </div>
        <div className={styles.carouselControls}>
          <button className={styles.controlLeft}>&lt;</button>
          <button className={styles.controlRight}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
