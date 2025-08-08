import PageBanner from "../../components/PageBanner";
import city from "../../assets/city.jpg";
import styles from "./styles.module.css";
import ExpandButton from "../../components/ExpandButton";
import time from "../../assets/equipe_quem_somos.jpg";
import { useNavigate } from "react-router-dom";
import { PiHandshakeLight } from "react-icons/pi";

export default function QuemSomos() {
  const navigate = useNavigate();
  const handleVerEquipeClick = () => {
    navigate("/equipe");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <PageBanner title="Quem Somos" image={city} />
      <section className={styles.quemSomosContainer}>
        <div className={styles.quemSomosContent}>
          <h2 className={styles.quemSomosSubtitle}>
            O BFA Advogados é um escritório de advocacia de negócios, que tem
            seu foco na qualidade técnica e no atendimento individualizado de
            cada cliente.
          </h2>
          <p className={styles.quemSomosDescription}>
            Com advogados especializados em suas áreas de atuação e dedicados a
            entender as necessidades de nossos clientes, criamos uma rede
            multidisciplinar. Estamos preparados para os desafios jurídicos do
            mundo atual. Com advogados especializados em suas áreas de atuação e
            dedicados a entender as necessidades de nossos clientes, criamos uma
            rede multidisciplinar. Estamos preparados para os desafios jurídicos
            do mundo atual. Estamos preparados para os desafios jurídicos do
            mundo atual.
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
            mundo atual. Com advogados especializados em suas áreas de atuação e
            dedicados a entender as necessidades de nossos clientes, criamos uma
            rede multidisciplinar. Estamos preparados para os desafios jurídicos
            do mundo atual.
          </p>
        </div>
      </section>
      <section className={styles.quemSomosMVV}>
        <div className={styles.quemSomosMVContainer}>
          <div className={styles.quemSomosMVItem}>
            <h3>Missão</h3>
            <p>
              Nossa missão é fornecer serviços jurídicos de alta qualidade, com
              foco nas necessidades de nossos clientes e na busca por soluções
              eficazes. Nossa missão é fornecer serviços jurídicos de alta
              qualidade. Nossa missão é fornecer serviços jurídicos de alta
              qualidade.
            </p>
          </div>
          <div className={styles.quemSomosMVItem}>
            <h3>Visão</h3>
            <p>
              Nossa missão é fornecer serviços jurídicos de alta qualidade, com
              foco nas necessidades de nossos clientes e na busca por soluções
              eficazes. Nossa missão é fornecer serviços jurídicos de alta
              qualidade. Nossa missão é fornecer serviços jurídicos de alta
              qualidade.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.quemSomosValores}>
        <h3>Valores</h3>
        <div className={styles.quemSomosValoresContainer}>
          <div className={styles.quemSomosValoresItem}>
            <PiHandshakeLight color="#efefef" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Ética</h4>
              <p>
                Agimos com transparência, integridade e respeito em todas as
                nossas relações.
              </p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <PiHandshakeLight color="#efefef" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Excelência</h4>
              <p>
                Buscamos constantemente a melhoria contínua e a inovação em
                nossos serviços.
              </p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <PiHandshakeLight color="#efefef" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Compromisso</h4>
              <p>
                Estamos comprometidos com o sucesso de nossos clientes e com a
                entrega de resultados concretos.
              </p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <PiHandshakeLight color="#efefef" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Colaboração</h4>
              <p>
                Acreditamos na força do trabalho em equipe e na construção de
                parcerias duradouras.
              </p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <PiHandshakeLight color="#efefef" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Responsabilidade</h4>
              <p>
                Contribuímos para o desenvolvimento sustentável e para a
                promoção da justiça social.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quemSomosEquipe}>
        <div className={styles.quemSomosEquipeInfos}>
          <h2 className={styles.quemSomosEquipeTitle}>
            Conheça nosso time de especialistas
          </h2>
          <p className={styles.quemSomosEquipeText}>
            <span>
              Nossa equipe reúne profissionais altamente qualificados, com
              formação e atuação nas instituições de ensino mais conceituadas do
              país.
            </span>
          </p>
          <ExpandButton onClick={handleVerEquipeClick} text={"Ver equipe"} />
        </div>
        <img className={styles.quemSomosEquipeImage} src={time} alt="Imagem" />
      </section>
    </>
  );
}
