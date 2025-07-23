import styles from './styles.module.css';
import pedro from "../../assets/pedro.jpg";
import victor from "../../assets/victor.jpg";
import flavia from "../../assets/flavia.jpg";
import marchesi from "../../assets/marchesi.jpg";

export default function HomeEquipe() {
    return (
      <section className={styles.equipeSection}>
        <div className={styles.equipeContainer}>
          <h2 className={styles.equipeTitle}>
            Nossa <span>Equipe</span>
          </h2>
          <div className={styles.equipeMembers}>
            <div className={styles.equipeMember}>
              <img src={victor} alt="Membro da equipe" />
              <p>Victor H. Piller</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={pedro} alt="Membro da equipe" />
              <p>Pedro H. Fonseca</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={marchesi} alt="Membro da equipe" />
              <p>João Marchesi</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={flavia} alt="Membro da equipe" />
              <p>Flávia Perim</p>
            </div>
          </div>
        </div>
      </section>
    );
}