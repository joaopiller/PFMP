import PageBanner from "../../components/PageBanner";
import city from "../../assets/city.jpg";
import styles from "./styles.module.css";
import ExpandButton from "../../components/ExpandButton";
import time from "../../assets/equipe_quem_somos.jpg";
import NossosDiferenciais from "../../components/NossosDiferenciais";
import AreasDeAtuacao from "../../components/AreasDeAtuação";

export default function QuemSomos() {
  return (
    <>
      <PageBanner title="Quem Somos" image={city} />
      <section className={styles.quemSomosContent}>
        <h2 className={styles.quemSomosSubtitle}>
          O BFA Advogados é um escritório de advocacia de negócios, que tem seu
          foco na qualidade técnica e no atendimento individualizado de cada
          cliente.
        </h2>
        <p className={styles.quemSomosDescription}>
          Com advogados especializados em suas áreas de atuação e dedicados a
          entender as necessidades de nossos clientes, criamos uma rede
          multidisciplinar. Estamos preparados para os desafios jurídicos do
          mundo atual. Com advogados especializados em suas áreas de atuação e
          dedicados a entender as necessidades de nossos clientes, criamos uma
          rede multidisciplinar. Estamos preparados para os desafios jurídicos
          do mundo atual.
        </p>
        <p className={styles.quemSomosDescription}>
          Com advogados especializados em suas áreas de atuação e dedicados a
          entender as necessidades de nossos clientes, criamos uma rede
          multidisciplinar. Estamos preparados para os desafios jurídicos do
          mundo atual. Com advogados especializados em suas áreas de atuação e
          dedicados a entender as necessidades de nossos clientes, criamos uma
          rede multidisciplinar. Estamos preparados para os desafios jurídicos
          do mundo atual.
        </p>
        <p className={styles.quemSomosDescription}>
          Com advogados especializados em suas áreas de atuação e dedicados a
          entender as necessidades de nossos clientes, criamos uma rede
          multidisciplinar. Estamos preparados para os desafios jurídicos do
          mundo atual.
        </p>
      </section>
      <section className={styles.quemSomosMVV}>
        <div className={styles.quemSomosMVVContainer}>
          <div className={styles.quemSomosMVVBalloon}>
            <h3>Missão</h3>
            <p>
              Nossa missão é fornecer serviços jurídicos de alta qualidade, com
              foco nas necessidades de nossos clientes e na busca por soluções
              eficazes.
            </p>
          </div>
          <div className={styles.quemSomosMVVBalloon}>
            <h3>Visão</h3>
            <p>
              Nossa missão é fornecer serviços jurídicos de alta qualidade, com
              foco nas necessidades de nossos clientes e na busca por soluções
              eficazes.
            </p>
          </div>
          <div className={styles.quemSomosMVVBalloon}>
            <h3>Valores</h3>
            <p>
              Nossa missão é fornecer serviços jurídicos de alta qualidade, com
              foco nas necessidades de nossos clientes e na busca por soluções
              eficazes.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.quemSomosEquipe}>
        <div className={styles.quemSomosEquipeInfos}>
          <h2 className={styles.quemSomosEquipeTitle}>Conheça nosso time de especialistas</h2>
          <p className={styles.quemSomosEquipeText}>
            <span>
              Nossa equipe reúne profissionais altamente qualificados, com
              formação e atuação nas instituições de ensino mais conceituadas do
              país.
            </span>
          </p>
          <ExpandButton text={"Ver equipe"} />
        </div>
        <img className={styles.quemSomosEquipeImage} src={time} alt="Imagem" />
      </section>
      <NossosDiferenciais />
      <AreasDeAtuacao whiteBackground={true} />
    </>
  );
}
