import styles from "./styles.module.css";
import bannerImage from "../../assets/imagem_banner.svg";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeBanner() {
  return (
    <section className={styles.homeBanner}>
      <div className={styles.bannerInfos}>
        <div className={styles.titles}>
          <h1 className={styles.boldTitle}>Lorem ipsum</h1>
          <h1 className={styles.lightTitle}>lorem etc</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p className={styles.text}>
            Viverra felis, ultrices scelerisque lorem. urna. ex. fringilla Morbi
            quis dui. non. urna Morbi efficitur. sit Sed tincidunt hendrerit
            elit tincidunt Lorem vel.
          </p>
          <button className={styles.button}>
            <FaWhatsapp size={20} />
            Entrar em contato
          </button>
        </div>
      </div>
      <img
        className={styles.bannerImage}
        src={bannerImage}
        alt="Balão escrito 'Rompendo barreiras além das burocráticas'"
      />
    </section>
  );
}
