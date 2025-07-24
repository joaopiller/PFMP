import styles from './styles.module.css';

export default function CardMembro({image, name}) {
  return (
    <div className={styles.equipeMember}>
      <img src={image} alt="Membro da equipe" />
      <p>{name}</p>
    </div>
  );
}
