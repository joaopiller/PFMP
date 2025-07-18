import styles from './styles.module.css';
import member from "../../assets/member.jpg";

export default function HomeEquipe() {
    return (
      <section className={styles.equipeSection}>
        <div className={styles.equipeContainer}>
          <h2 className={styles.equipeTitle}>
            Nossa <span>Equipe</span>
          </h2>
          <div className={styles.equipeMembers}>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller</p>
            </div>
          </div>
        </div>
      </section>
    );
}