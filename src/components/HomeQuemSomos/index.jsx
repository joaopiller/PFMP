import styles from "./styles.module.css";
import time from "../../assets/time.jpg";
import ExpandButton from "../ExpandButton";
import { useNavigate } from "react-router-dom";

export default function HomeQuemSomos() {
  const navigate = useNavigate();
  const handleExpandClick = () => {
    navigate("/quem-somos");
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.quemSomosHome}>
      <div className={styles.quemSomosInfos}>
        <h2 className={styles.quemSomosTitle}>
          Escritório de Advocacia Tributária Piller, Fonseca, Marchesi e Perim
        </h2>
        <p className={styles.quemSomosText}>
          <span>
            Somos o PFMP Advogados, um escritório digital com atuação nacional e
            foco em Direito Tributário. Atendemos empresas, profissionais
            liberais e pessoas físicas com soluções jurídicas claras, acessíveis
            e eficientes. Tributário de verdade, para gente de verdade.
          </span>
        </p>
        <ExpandButton onClick={handleExpandClick} text={"Saiba mais"} />
      </div>
      <img className={styles.quemSomosImage} src={time} alt="Imagem" />
    </section>
  );
}
