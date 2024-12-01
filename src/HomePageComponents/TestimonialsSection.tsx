import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/HomePageStyles/TestimonialsSection.module.scss";

interface Testimonial {
  image: string;
  review: string;
  name: string;
  stars: number;
}

const TestimonialsCarousel = () => {
  const { t } = useTranslation("common");
  const testimonials = t("testimonials.reviews", { returnObjects: true }) as Testimonial[];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerRow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerRow >= testimonials.length ? 0 : prev + itemsPerRow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerRow < 0 ? testimonials.length - itemsPerRow : prev - itemsPerRow
    );
  };

  const totalSteps = Math.ceil(testimonials.length / itemsPerRow);
  const stepWidth = 1499 / totalSteps; 
  const activeBarLeft = currentIndex / itemsPerRow * stepWidth;

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>{t("testimonials.title")}</h2>
      <div className={styles.carousel}>
        <div className={styles.testimonialCards}>
          {testimonials.slice(currentIndex, currentIndex + itemsPerRow).map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={102}
                height={102}
                className={styles.image}
              />
              <div className={styles.content}>
                <p className={styles.review}>{testimonial.review}</p>
                <span className={styles.name}>— {testimonial.name}</span>
                <div className={styles.stars}>
                  {"★".repeat(testimonial.stars)}
                  {"☆".repeat(5 - testimonial.stars)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.progressBar}>
          <div className={styles.line}></div>
          <div
            className={styles.activeBar}
            style={{ left: `${activeBarLeft}px` }}
          ></div>
        </div>
        <button className={styles.chevron} onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.chevronIcon}
          >
            <path d="M15 5l-7 7 7 7" stroke="#2A2A2A" strokeWidth="3" fill="none" />
          </svg>
        </button>
        <button className={styles.chevron} onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`${styles.chevronIcon} ${styles.right}`}
          >
            <path d="M9 5l7 7-7 7" stroke="#2A2A2A" strokeWidth="3" fill="none" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
