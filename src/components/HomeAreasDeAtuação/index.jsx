import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";

export default function HomeAreasDeAtuacao({ whiteBackground = false }) {
  return (
    <section
      className={styles.areasDeAtuacaoSection}
      style={{ backgroundColor: whiteBackground ? "#efefef" : "#e8e8e8" }}
    >
      <div className={styles.areasDeAtuacaoContainer}>
        <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        <div className={styles.areasDeAtuacaoSlider}>
        </div>
      </div>
    </section>
  );
}
