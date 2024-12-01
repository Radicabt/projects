import { useTranslation } from "next-i18next";
import styles from "../../styles/PartnershipPageStyles/TestimonialsSection.module.scss";

const TestimonialSection = () => {
  const { t } = useTranslation("partnership");

  const testimonials = t("testimonials", { returnObjects: true }) as Array<{
    name: string;
    text: string;
    rating: number;
    image: string;
  }> || [];

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    console.warn("Testimonials data is empty or not an array.");
    return null; 
  }

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.mainAndSideTestimonials}>
        <div className={styles.mainTestimonial}>
          <div className={styles.testimonialImageContainer}>
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className={styles.testimonialImage}
            />
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.textContainer}>
            <p className={styles.testimonialText}>{testimonials[0].text}</p>
            <p className={styles.testimonialName}>
              — <span className={styles.name}>{testimonials[0].name}</span>
              <span className={styles.rating}>
                {"★".repeat(testimonials[0].rating)}
              </span>
            </p>
          </div>
        </div>

        <div className={styles.sideTestimonials}>
          {testimonials.slice(1).map((testimonial, index) => (
            <div key={index} className={styles.sideTestimonial}>
              <div className={styles.sideTestimonialImageContainer}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.sideTestimonialImage}
                />
              </div>
              <div className={styles.verticalLineSide}></div>
              <div className={styles.sideTextContainer}>
                <p className={styles.sideTestimonialText}>{testimonial.text}</p>
                <p className={styles.sideTestimonialName}>
                  — <span>{testimonial.name}</span>
                  <span className={styles.sideRating}>
                    {"★".repeat(testimonial.rating)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chevrons}>
        <div className={styles.chevron}>&#9660;</div>
        <div className={styles.chevron}>&#9650;</div> 
      </div>
    </section>
  );
};

export default TestimonialSection;
