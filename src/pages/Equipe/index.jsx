import styles from "./styles.module.css";
import CardMembro from "../../components/CardMembro";
import victor from "../../assets/victor.jpg";
import pedro from "../../assets/pedro.jpg";
import flavia from "../../assets/flavia.jpg";
import marchesi from "../../assets/marchesi.jpg";
import nossa_equipe from "../../assets/nossa_equipe.jpg";
import PageBanner from "../../components/PageBanner";

export default function Equipe() {
  return (
    <>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.equipeContent}>
        <h2 className={styles.equipeSubtitle}>
          Advogados especialistas em mais de 40 práticas
        </h2>
        <p className={styles.equipeDescription}>
          Com advogados especializados em suas áreas de atuação e dedicados a
          entender as necessidades de nossos clientes, criamos uma rede
          multidisciplinar. Estamos preparados para os desafios jurídicos do
          mundo atual.
        </p>
        <div className={styles.equipeMembers}>
          <CardMembro image={victor} name="Victor H. Piller" />
          <CardMembro image={pedro} name="Pedro H. Fonseca" />
          <CardMembro image={marchesi} name="João Marchesi" />
          <CardMembro image={flavia} name="Flávia Perim" />
        </div>
      </section>
    </>
  );
}
