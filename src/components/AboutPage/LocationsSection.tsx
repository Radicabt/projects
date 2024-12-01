import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/AboutPageStyles/Locations.module.scss";

type Location = {
  name: string;
  address: string;
  city: string;
  zip: string;
};

const LocationsSection = () => {
  const { t } = useTranslation("about");

  const locations = t("locations.countries", { returnObjects: true }) as Location[];

  return (
    <section className={styles.locations}>
      <h1>
        <span>{t("locations.title").split(" ")[0]}</span>{" "}
        <span className={styles.orangeText}>{t("locations.title").split(" ")[1]}</span>
      </h1>
      <div className={styles.locationCards}>
        {locations.map((location, index) => (
          <div className={styles.locationCard} key={index}>
            <h3>{location.name}</h3>
            <div className={styles.locationDetails}>
              <div className={styles.iconContainer}>
                <Image
                  src="/images/pin-drop.png"
                  alt="Location pin icon"
                  width={20}
                  height={25}
                  className={styles.locationIcon}
                />
              </div>
              <p>{location.address}</p> 
              <p>{location.city}</p>    
              <p>{location.zip}</p>     
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
