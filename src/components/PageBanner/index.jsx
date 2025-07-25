import styles from './styles.module.css';

export default function PageBanner({ image, title }) {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={styles.equipeBanner}
    >
      <div className={styles.bannerOverlay}>
        <h1 className={styles.bannerTitle}>{title}</h1>
      </div>
    </section>
  );
}
