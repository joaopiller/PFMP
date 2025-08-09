import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeBanner() {
  const phoneNumber = "31997127831";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className={styles.homeBanner}>
      <div className={styles.bannerBlur}></div>
      <div className={styles.bannerInfos}>
        <div className={styles.titles}>
          <h1 className={styles.boldTitle}>
            Advocacia Tributária
          </h1>
          <h1 className={styles.lightTitle}>com Atuação Nacional</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p className={styles.text}>
            Consultoria e contencioso tributário para empresas e pessoas
            físicas, com soluções fiscais estratégicas, digitais e juridicamente
            seguras em todo o Brasil.
          </p>
          <a
            href={whatsappLink}
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
