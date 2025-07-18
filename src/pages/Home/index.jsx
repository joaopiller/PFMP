import HomeBanner from "../../components/HomeBanner";
import HomeEquipe from "../../components/HomeEquipe";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";
import publicacao from "../../assets/publicacao.jpg";
import styles from "./styles.module.css";
import ExpandButton from "../../components/ExpandButton";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeQuemSomos />
      <NossosDiferenciais />
      <HomeEquipe />
      <section className={styles.publicacoesSection}>
        <div className={styles.publicacoesContainer}>
          <h2 className={styles.publicacoesTitle}>
            Nossas <span>Publicações</span>
          </h2>
          <div className={styles.publicacoes}>
            <article className={styles.publicacaoCard}>
              <img
                className={styles.publicacaoImage}
                src={publicacao}
                alt="Publicação"
              />
              <div className={styles.publicacaoContent}>
                <div className={styles.publicacaoText}>
                  <h3 className={styles.publicacaoTitle}>
                    Senado aprova tornar permanentes benefícios fiscais ao
                    esporte
                  </h3>
                  <p className={styles.publicacaoDescription}>
                    Breve descrição da publicação. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Breve descrição
                    da publicação. Lorem ipsum dolor sit amet, consectetur
                    adipiscing, consectetur adipiscing...
                  </p>
                </div>
                <ExpandButton text={"Leia mais"} />
              </div>
            </article>
            <article className={styles.publicacaoCard}>
              <img
                className={styles.publicacaoImage}
                src={publicacao}
                alt="Publicação"
              />
              <div className={styles.publicacaoContent}>
                <div className={styles.publicacaoText}>
                  <h3 className={styles.publicacaoTitle}>
                    Senado aprova tornar permanentes benefícios fiscais ao
                    esporte
                  </h3>
                  <p className={styles.publicacaoDescription}>
                    Breve descrição da publicação. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Breve descrição
                    da publicação. Lorem ipsum dolor sit amet, consectetur
                    adipiscing, consectetur adipiscing...
                  </p>
                </div>
                <ExpandButton text={"Leia mais"} />
              </div>
            </article>
            <article className={styles.publicacaoCard}>
              <img
                className={styles.publicacaoImage}
                src={publicacao}
                alt="Publicação"
              />
              <div className={styles.publicacaoContent}>
                <div className={styles.publicacaoText}>
                  <h3 className={styles.publicacaoTitle}>
                    Senado aprova tornar permanentes benefícios fiscais ao
                    esporte
                  </h3>
                  <p className={styles.publicacaoDescription}>
                    Breve descrição da publicação. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Breve descrição
                    da publicação. Lorem ipsum dolor sit amet, consectetur
                    adipiscing, consectetur adipiscing...
                  </p>
                </div>
                <ExpandButton text={"Leia mais"} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
