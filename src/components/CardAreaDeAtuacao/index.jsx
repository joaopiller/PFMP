import styles from "./styles.module.css";

// `margin` centraliza o card dentro dos slides do carrossel da home.
export default function CardAreaDeAtuacao({ title, description, children, margin }) {
  return (
    <div
      className={`${styles.areaDeAtuacaoCard} ${margin ? "" : styles.noMargin}`}
    >
      {children}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
