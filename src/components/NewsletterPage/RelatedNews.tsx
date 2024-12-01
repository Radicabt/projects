import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import SignUpForm from "../../HomePageComponents/SignUpForm";
import Summary from "./Summary";
import styles from "../../styles/NewsletterPageStyles/RelatedNews.module.scss";

const RelatedNews = () => {
  type RelatedNewsType = {
    subtitle: string;
    date: string;
    title: string;
    description: string;
    buttonText: string;
  };

  type ContributorType = {
    emailPlaceholder: string;
    bioPlaceholder: string;
  };

  const { t } = useTranslation("newsletter");
  const relatedNews = t("relatedNews", { returnObjects: true }) as RelatedNewsType[];
  const contributor = t("contributor", { returnObjects: true }) as ContributorType;

  const [bookmarked, setBookmarked] = useState<boolean[]>(new Array(relatedNews.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookmarkClick = (index: number) => {
    const updatedBookmarkState = [...bookmarked];
    updatedBookmarkState[index] = !updatedBookmarkState[index];
    setBookmarked(updatedBookmarkState);
  };

  const openModal = (event: React.FormEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.relatedNews}>
      <div className={styles.headingContainer}>
        <h2 className={styles.relatedNewsTitle}>Related News</h2>
        <div className={styles.headingBorder}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.newsItems}>
          {relatedNews.map((news, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.card}>
                <p className={styles.subtitle}>{news.subtitle}</p>
                <p className={styles.date}>{news.date}</p>
                <h3 className={styles.title}>{news.title}</h3>
                <p className={styles.description}>{news.description}</p>
                <button className={styles.readMoreBtn} onClick={openModal}>
                  {news.buttonText}
                </button>
                <img
                  src={bookmarked[index] ? "/images/bookmark-filled.png" : "/images/bookmark.png"}
                  alt="Bookmark"
                  className={styles.bookmarkIcon}
                  onClick={() => handleBookmarkClick(index)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.carouselLine}></div>

        <div className={styles.summary}>
          <Summary />
        </div>
      </div>

      <div className={styles.contributorContainer}>
        <h2 className={styles.contributorHeading}>Want to Become a Contributor?</h2>
        <div className={styles.contributorSection}>
          <form onSubmit={openModal}>
            <input
              type="email"
              placeholder={contributor.emailPlaceholder}
              className={styles.emailInput}
            />
            <textarea
              placeholder={contributor.bioPlaceholder}
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.sendBtn}>
              Send
            </button>
          </form>
          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                <SignUpForm onClose={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedNews;
