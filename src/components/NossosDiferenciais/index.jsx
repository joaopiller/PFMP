import { PiHandshakeLight } from "react-icons/pi";
import styles from "./styles.module.css";
import SectionTitle from "../SectionTitle";
import Diferencial from "./Diferencial";
import { BsChat, BsChatLeftText } from "react-icons/bs";
import { GiBrazil } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";
import { FaBookOpen, FaLaptop } from "react-icons/fa";
import { TbBriefcase2Filled } from "react-icons/tb";
import { RiBook2Fill } from "react-icons/ri";
import { VscLaw } from "react-icons/vsc";

export default function NossosDiferenciais() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.contentBox}>
            <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
            <div className={styles.differentials}>
              <Diferencial
                title="Comunicação simples"
                description="Nada de juridiquês. Aqui, você entende tudo do começo ao fim."
              >
                <IoMdChatbubbles color="#DB9F5D" size={24} />
              </Diferencial>
              <Diferencial
                title="Atuação nacional"
                description=" Atendemos em todo o Brasil, com foco especial em quem está fora dos grandes centros."
              >
                <GiBrazil color="#DB9F5D" size={24} />
              </Diferencial>
              <Diferencial
                title="Advocacia digital"
                description="Usamos tecnologia para tornar nosso serviço cada vez mais eficiente."
              >
                <FaLaptop color="#DB9F5D" size={24} />
              </Diferencial>
              <Diferencial
                title="Foco no empresário"
                description="Falamos a sua língua e entendemos a rotina de quem empreende."
              >
                <TbBriefcase2Filled color="#DB9F5D" size={24} />
              </Diferencial>
              <Diferencial
                title="Formação de ponta"
                description=" Equipe formada pela UFMG com sólida base técnica e acadêmica."
              >
                <RiBook2Fill color="#DB9F5D" size={24} />
              </Diferencial>
              <Diferencial
                title="Experiência diversa"
                description="Sócios com experiência nos maiores escritórios do país, no setor público e em projetos empreendedores. "
              >
                <VscLaw color="#DB9F5D" size={24} />
              </Diferencial>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mobileBox}>
        <div className={styles.mobileTitle}>
          <SectionTitle lightTitle="Nossos" boldTitle="Diferenciais" white />
        </div>
        <div className={styles.differentials}>
          <Diferencial
            title="Comunicação simples"
            description="Nada de juridiquês. Aqui, você entende tudo do começo ao fim."
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
          <Diferencial
            title="Atuação nacional"
            description=" Atendemos em todo o Brasil, com foco especial em quem está fora dos grandes centros."
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
          <Diferencial
            title="Advocacia digital"
            description="Usamos tecnologia para tornar nosso serviço cada vez mais eficiente."
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
          <Diferencial
            title="Foco no empresário"
            description="Falamos a sua língua e entendemos a rotina de quem empreende."
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
          <Diferencial
            title="Formação de ponta"
            description=" Equipe formada pela UFMG com sólida base técnica e acadêmica."
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
          <Diferencial
            title="Experiência diversa"
            description="Sócios com experiência nos maiores escritórios do país, no setor público e em projetos empreendedores. "
          >
            <PiHandshakeLight color="#DB9F5D" size={36} />
          </Diferencial>
        </div>
      </section>
    </>
  );
}
