import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeBanner() {
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
          <button className={styles.button}>
            <FaWhatsapp size={20} />
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
}
