import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function CardMembro({ image, name, id }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/equipe/${id}`);
  };

  return (
    <div
      className={styles.equipeMember}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
    >
      <img src={image} alt="Membro da equipe" />
      <p>{name}</p>
    </div>
  );
}
