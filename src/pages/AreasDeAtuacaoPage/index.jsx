import PageBanner from "../../components/PageBanner";
import areas_de_atuacao from "../../assets/areas_de_atuacao.jpg";
import styles from "./styles.module.css";
import { GoLaw } from "react-icons/go";
import CardAreaDeAtuacao from "../../components/CardAreaDeAtuacao";

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <PageBanner image={areas_de_atuacao} title="Áreas de Atuação" />
      <h2 className={styles.areasDeAtuacaoTitle}>
        Conheça as áreas que a PFMP Advogados atua...
      </h2>
      <section className={styles.areasDeAtuacaoContent}>
        <div className={styles.areasDeAtuacaoCards}>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Tributário"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
          <CardAreaDeAtuacao
            title="Direito Empresarial"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit amet consectetur."
          >
            <GoLaw color="#db9f5d" size={90} />
          </CardAreaDeAtuacao>
        </div>
      </section>
    </>
  );
}
