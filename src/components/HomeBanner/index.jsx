import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/config/site";

export default function HomeBanner() {
  return (
    <section className={styles.homeBanner}>
      <div className={styles.bannerBlur}></div>
      <div className={styles.bannerInfos}>
        <h1 className={styles.titles}>
          <span className={styles.boldTitle}>Advocacia Tributária</span>{" "}
          <span className={styles.lightTitle}>com Atuação Nacional</span>
        </h1>
        <div className={styles.ctaGroup}>
          <p className={styles.text}>
            Consultoria e defesa tributária para empresas e pessoas físicas, com
            soluções fiscais estratégicas, digitais e seguras em todo o Brasil.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <FaWhatsapp size={20} />
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
