import PageBanner from "../../components/PageBanner";
import nossa_equipe from "../../assets/images/equipe_banner.JPG";
import styles from "./styles.module.css";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import equipeMembers from "../../data/equipeMembers.js";

export default function MembroDetalhes() {
  const { memberId } = useParams();
  const membro = equipeMembers.find((m) => m.id === memberId);

  return (
    <div>
      <PageBanner image={nossa_equipe} title="Equipe" />
      <section className={styles.membroDetalhesContent}>
        <div className={styles.membroDetalhesCard}>
          <img className={styles.membroDetalhesImage} src={membro.image} alt="" />
          <div className={styles.membroDetalhesContact}>
            <div className={styles.membroDetalhesContactInfo}>
              <div className={styles.membroDetalhesContactData}>
                <FaPhoneAlt size={16} color="#db9f5d" />
                <span>{membro.phoneNumber}</span>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <MdEmail size={16} color="#db9f5d" />
                <span>{membro.email}</span>
              </div>
              <div className={styles.membroDetalhesContactData}>
                <FaLinkedinIn size={16} color="#db9f5d" />
                <a
                  href={membro.linkedinLink}
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
                {membro.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.membroDetalhesInfo}>
          <div className={styles.membroDetalhesInfoHeader}>
            <h2>{membro.name}</h2>
            <p>{membro.role}</p>
          </div>
          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Formação Acadêmica</h3>
            <ul>
              {membro.academic.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.membroDetalhesFormacaoAtuacao}>
            <h3>Áreas de Atuação</h3>
            <ul>
              {membro.areas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
