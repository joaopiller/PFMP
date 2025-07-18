import HomeBanner from "../../components/HomeBanner";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";
import member from "../../assets/member.jpg";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeQuemSomos />
      <NossosDiferenciais />
      <section className={styles.equipeSection}>
        <div className={styles.equipeContainer}>
          <h2 className={styles.equipeTitle}>
            Nossa <span>Equipe</span>
          </h2>
          <div className={styles.equipeMembers}>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller Menezes</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller Menezes</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller Menezes</p>
            </div>
            <div className={styles.equipeMember}>
              <img src={member} alt="Membro da equipe" />
              <p>Victor Hugo Piller Menezes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
