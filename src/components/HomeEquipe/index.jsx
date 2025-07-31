import styles from "./styles.module.css";
import pedro from "../../assets/pedro.jpg";
import victor from "../../assets/victor.jpg";
import flavia from "../../assets/flavia.jpg";
import marchesi from "../../assets/marchesi.jpg";
import SectionTitle from "../SectionTitle";
import CardMembro from "../CardMembro";

export default function HomeEquipe() {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.equipeContainer}>
        <SectionTitle lightTitle="Nossa" boldTitle="Equipe" />
        <div className={styles.equipeMembers}>
          <CardMembro id="vhpiller" image={victor} name="Victor H. Piller" />
          <CardMembro id="phfonseca" image={pedro} name="Pedro H. Fonseca" />
          <CardMembro id="jmarchesi" image={marchesi} name="João Marchesi" />
          <CardMembro id="fperim" image={flavia} name="Flávia Perim" />
        </div>
      </div>
    </section>
  );
}
