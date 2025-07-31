import { useNavigate } from "react-router-dom";
import publicacao from "../../assets/publicacao.jpg";
import CardPublicacao from "../CardPublicacao";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";

export default function HomePublicacoes() {
  const navigate = useNavigate();
  const handleVerMaisClick = () => {
    navigate("/publicacoes");
    window.scrollTo(0, 0);
  };

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
          <button onClick={handleVerMaisClick} className={styles.verMaisButton}>Ver mais publicações</button>
        </div>
      </div>
    </section>
  );
}
