import { useNavigate } from "react-router-dom";
import CardPublicacao from "../CardPublicacao";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.css";
import posts from "../../data/posts.js";

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
          {posts.slice(0, 3).map((post) => (
            <CardPublicacao
              key={post.id}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
      <button onClick={handleVerMaisClick} className={styles.verMaisButton}>
        Ver mais publicações
      </button>
    </section>
  );
}
