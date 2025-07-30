import { useNavigate } from "react-router-dom";
import ExpandButton from "../ExpandButton";
import styles from "./styles.module.css";

export default function CardPublicacao({image, title, description, id}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/publicacoes/${id}`);
  };

  return (
    <article className={styles.publicacaoCard}>
      <img
        className={styles.publicacaoImage}
        src={image}
        alt="Publicação"
      />
      <div className={styles.publicacaoContent}>
        <div className={styles.publicacaoText}>
          <h3 className={styles.publicacaoTitle}>
            {title}
          </h3>
          <p className={styles.publicacaoDescription}>
           {description}
          </p>
        </div>
        <ExpandButton text={"Leia mais"} onClick={handleCardClick} />
      </div>
    </article>
  );
}
