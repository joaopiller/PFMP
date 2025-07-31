import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeBanner() {
  const phoneNumber = "22988587782";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className={styles.homeBanner}>
      <div className={styles.bannerBlur}></div>
      <div className={styles.bannerInfos}>
        <div className={styles.titles}>
          <h1 className={styles.boldTitle}>Tributário de verdade</h1>
          <h1 className={styles.lightTitle}>para gente de verdade</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p className={styles.text}>
            Aliando expertise jurídica e tecnologia para otimizar sua carga
            tributária, fortalecer seu empreendimento e viabilizar a expansão do
            seu negócio.
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
