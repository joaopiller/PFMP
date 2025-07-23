import HomeBanner from "../../components/HomeBanner";
import HomeEquipe from "../../components/HomeEquipe";
import HomePublicacoes from "../../components/HomePublicacoes";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";
import SectionTitle from "../../components/SectionTitle";
import styles from  "./styles.module.css";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <section className={styles.areasDeAtuacaoSection}>
        <div className={styles.areasDeAtuacaoContainer}>
          <SectionTitle lightTitle="Áreas de" boldTitle="Atuação" />
        </div>
      </section>
      <HomeQuemSomos />
      <NossosDiferenciais />
      <HomeEquipe />
      <HomePublicacoes />
    </>
  );
}
