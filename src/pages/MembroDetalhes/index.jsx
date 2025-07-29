import PageBanner from "../../components/PageBanner";
import nossa_equipe from "../../assets/nossa_equipe.jpg";
import styles from "./styles.module.css";
import victor from "../../assets/victor.jpg";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MembroDetalhes() {
  return (
    <div>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.membroDetalhesContent}>
        <div className={styles.membroDetalhesCard}>
          <img className={styles.membroDetalhesImage} src={victor} alt="" />
          <div className={styles.membroDetalhesContact}>
            <div className={styles.membroDetalhesContactInfo}>
              <div className={styles.membroDetalhesContactData}>
                <FaPhoneAlt size={16} color="#db9f5d" />
                <span>(11) 91234-5678</span>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <MdEmail size={16} color="#db9f5d" />
                <span>victor@example.com</span>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <FaLinkedinIn size={16} color="#db9f5d" />
                <a
                  href="https://www.linkedin.com/in/victor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perfil no LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.membroDetalhesIdiomas}>
              <h3>Idiomas</h3>
              <ul>
                <li>Português</li>
                <li>Inglês</li>
                <li>Espanhol</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.membroDetalhesInfo}>
          <div className={styles.membroDetalhesInfoHeader}>
            <h2>Victor Hugo Piller</h2>
            <p>Sócio fundador</p>
          </div>
          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Formação Acadêmica</h3>
            <ul>
              <li>Graduação em Direito pela Universidade de São Paulo (USP)</li>
              <li>
                Mestrado em Direito Empresarial pela Fundação Getúlio Vargas
                (FGV)
              </li>
              <li>
                Doutorado em Direito Tributário pela Pontifícia Universidade
                Católica de São Paulo (PUC-SP)
              </li>
            </ul>
          </div>
          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Áreas de Atuação</h3>
            <ul>
              <li>Direito Tributário</li>
              <li>Direito Empresarial</li>
              <li>Direito Civil</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
