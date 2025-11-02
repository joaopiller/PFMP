import Image from "next/image";
import styles from "./styles.module.css";

export default function PageBanner({ image, title }) {
  return (
    <section className={styles.equipeBanner}>
      <Image
        src={image}
        alt={`Banner da página ${title}`}
        className={styles.bannerBackground}
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 20%" }}
      />
      <div className={styles.bannerOverlay}>
        <div className={styles.bannerBalloon}>
          <h1 className={styles.bannerTitle}>{title}</h1>
        </div>
      </div>
    </section>
  );
}
