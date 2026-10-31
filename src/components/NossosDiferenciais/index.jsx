import SectionTitle from "@/components/SectionTitle";
import Diferencial from "./Diferencial";
import styles from "./styles.module.css";
import { GiBrazil } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { TbBriefcase2Filled } from "react-icons/tb";
import { RiBook2Fill } from "react-icons/ri";
import { VscLaw } from "react-icons/vsc";

const DIFERENCIAIS = [
  {
    title: "Comunicação simples",
    description:
      "Nada de juridiquês. Aqui, você entende tudo do começo ao fim.",
    icon: IoMdChatbubbles,
  },
  {
    title: "Atuação nacional",
    description:
      "Atendemos em todo o Brasil, com foco especial em quem está fora dos grandes centros.",
    icon: GiBrazil,
  },
  {
    title: "Advocacia digital",
    description:
      "Usamos tecnologia para tornar nosso serviço cada vez mais eficiente.",
    icon: FaLaptop,
  },
  {
    title: "Foco no empresário",
    description:
      "Falamos a sua língua e entendemos a rotina de quem empreende.",
    icon: TbBriefcase2Filled,
  },
  {
    title: "Formação de ponta",
    description:
      "Equipe formada pela UFMG com sólida base técnica e acadêmica.",
    icon: RiBook2Fill,
  },
  {
    title: "Experiência diversa",
    description:
      "Sócios com experiência nos maiores escritórios do país, no setor público e em projetos empreendedores.",
    icon: VscLaw,
  },
];

function DiferenciaisList() {
  return (
    <div className={styles.differentials}>
      {DIFERENCIAIS.map(({ title, description, icon: Icon }) => (
        <Diferencial key={title} title={title} description={description}>
          <Icon color="#DB9F5D" size={22} aria-hidden="true" />
        </Diferencial>
      ))}
    </div>
  );
}

// O layout desktop (sobre a imagem de fundo) e o mobile são alternados via CSS.
export default function NossosDiferenciais() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.contentBox}>
            <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
            <DiferenciaisList />
          </div>
        </div>
      </section>

      <section className={styles.mobileBox}>
        <div className={styles.mobileTitle}>
          <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
        </div>
        <DiferenciaisList />
      </section>
    </>
  );
}
