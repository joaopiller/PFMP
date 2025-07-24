import publicacao from "../../assets/publicacao.jpg";
import SectionTitle from "../SectionTitle";
import CardPublicacao from "./CardPublicacao";
import styles from "./styles.module.css";

export default function HomePublicacoes() {
  return (
    <section className={styles.publicacoesSection}>
      <div className={styles.publicacoesContainer}>
        <SectionTitle lightTitle="Nossas" boldTitle="Publicações" />
        <div className={styles.publicacoes}>
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <CardPublicacao
            image={publicacao}
            title="Senado aprova tornar permanentes benefícios fiscais ao esporte"
            description="Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Breve descrição da publicação. Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur adipiscing..."
          />
          <button className={styles.verMaisButton}>Ver mais</button>
        </div>
      </div>
    </section>
  );
}
