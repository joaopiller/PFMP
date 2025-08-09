import PageBanner from "../../components/PageBanner";
import city from "../../assets/images/city.jpg";
import styles from "./styles.module.css";
import ExpandButton from "../../components/ExpandButton";
import equipeQuemSomos from "../../assets/images/equipe_quem_somos.JPG";
import { useNavigate } from "react-router-dom";
import { TbBulb } from "react-icons/tb";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

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
          <p className={styles.quemSomosDescription}>
            O PFMP Advogados é um escritório de advocacia com atuação nacional e
            foco em soluções jurídicas na área do Direito Tributário. Atendemos
            pequenas e médias empresas, profissionais liberais e pessoas físicas
            que buscam apoio jurídico especializado, claro e acessível para
            enfrentar desafios fiscais.
          </p>
          <p className={styles.quemSomosDescription}>
            Nosso time é composto por quatro advogados tributaristas, todos
            formados pela Universidade Federal de Minas Gerais (UFMG), com
            sólida experiência nos maiores escritórios de advocacia do país e no
            setor público. Atuamos de forma digital, o que nos permite oferecer
            serviços jurídicos tributários em todo o Brasil, com agilidade,
            clareza e foco no resultado.
          </p>
          <p className={styles.quemSomosDescription}>
            Sabemos que muitos contribuintes enfrentam dificuldades para acessar
            um serviço jurídico de qualidade. Já ouviram promessas vagas, foram
            mal atendidos ou sequer entenderam o que estavam contratando. Nossa
            proposta é romper com esse modelo: oferecemos uma advocacia
            tributária eficiente, com linguagem simples, escuta ativa e entrega
            real de valor.
          </p>
          <p className={styles.quemSomosDescription}>
            Se você é empresário, profissional liberal ou pessoa física que
            enfrenta ou quer evitar problemas com o fisco, pode contar com um
            escritório de direito tributário preparado para defender seus
            direitos e buscar soluções. Somos o PFMP Advogados.
          </p>
          <p
            className={styles.quemSomosDescription}
            style={{ fontFamily: "var(--font-scandia-medium)" }}
          >
            Tributário de verdade para gente de verdade.
          </p>
        </div>
      </section>
      <section className={styles.quemSomosMVV}>
        <div className={styles.quemSomosMVContainer}>
          <div className={styles.quemSomosMVItem}>
            <h3>Missão</h3>
            <p>
              Nossa missão é defender os direitos dos contribuintes e garantir
              que tenham acesso a um serviço jurídico tributário de qualidade,
              acessível e comprometido com resultados concretos para os nossos
              clientes.
            </p>
          </div>
          <div className={styles.quemSomosMVItem}>
            <h3>Visão</h3>
            <p>
              Queremos ser o escritório de referência nacional em advocacia
              tributária para quem nunca teve acesso ou já se decepcionou com a
              advocacia tradicional oferecendo soluções jurídicas de alto nível,
              com linguagem acessível e foco total no resultado.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.quemSomosValores}>
        <h3>Valores</h3>
        <div className={styles.quemSomosValoresContainer}>
          <div className={styles.quemSomosValoresItem}>
            <IoChatbubblesOutline color="#db9f5d" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Comunicamos de forma clara</h4>
              <p>Juridiquês afasta, a gente simplifica.</p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <LuHandshake color="#db9f5d" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Não vendemos promessas</h4>
              <p>
                Somos sinceros e diretos na análise dos casos dos nossos
                clientes.
              </p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <TbBulb color="#db9f5d" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Pensamos em saídas</h4>
              <p>Apontar problemas não basta, é preciso buscar soluções.</p>
            </div>
          </div>
          <div className={styles.quemSomosValoresItem}>
            <GoPeople color="#db9f5d" size={80} />
            <div className={styles.quemSomosValoresText}>
              <h4>Escutamos com atenção</h4>
              <p>Valorizamos e buscamos compreender a dor de cada cliente.</p>
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
              Nossa equipe é composta por profissionais de excelência, com
              sólida formação e experiência acadêmica adquirida nas instituições
              de ensino mais renomadas do país.
            </span>
          </p>
          <ExpandButton onClick={handleVerEquipeClick} text={"Ver equipe"} />
        </div>
        <img
          className={styles.quemSomosEquipeImage}
          src={equipeQuemSomos}
          alt="Imagem"
        />
      </section>
    </>
  );
}
