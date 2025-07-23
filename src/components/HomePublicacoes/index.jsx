import publicacao from "../../assets/publicacao.jpg";
import ExpandButton from "../ExpandButton";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";

export default function HomePublicacoes() {
  return (
    <section className={styles.publicacoesSection}>
      <div className={styles.publicacoesContainer}>
        <SectionTitle lightTitle="Nossas" boldTitle="Publicações" />
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
                  Senado aprova tornar permanentes benefícios fiscais ao esporte
                </h3>
                <p className={styles.publicacaoDescription}>
                  Breve descrição da publicação. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Breve descrição da
                  publicação. Lorem ipsum dolor sit amet, consectetur
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
                  Senado aprova tornar permanentes benefícios fiscais ao esporte
                </h3>
                <p className={styles.publicacaoDescription}>
                  Breve descrição da publicação. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Breve descrição da
                  publicação. Lorem ipsum dolor sit amet, consectetur
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
                  Senado aprova tornar permanentes benefícios fiscais ao esporte
                </h3>
                <p className={styles.publicacaoDescription}>
                  Breve descrição da publicação. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Breve descrição da
                  publicação. Lorem ipsum dolor sit amet, consectetur
                  adipiscing, consectetur adipiscing...
                </p>
              </div>
              <ExpandButton text={"Leia mais"} />
            </div>
          </article>
          <button className={styles.verMaisButton}>Ver mais</button>
        </div>
      </div>
    </section>
  );
}
