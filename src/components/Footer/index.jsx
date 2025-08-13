import styles from './styles.module.css';
import footerImage from '../../assets/images/logo_bege.png';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const phoneNumber = "31997127831";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <img className={styles.footerImage} src={footerImage} alt="" />
          <div className={styles.footerInfo}>
            <h2>Endereço</h2>
            <p>Rua Paraíba nº 550, sala 900</p>
            <p>Savassi, Belo Horizonte - MG</p>
            <p>CEP: 30130-141 </p>
          </div>
          <div className={styles.footerInfo}>
            <h2>Contato</h2>
            <p>Telefone: (31) 99712-7831</p>
            <div className={styles.socialMedia}>
              <a
                target="_blank"
                href="https://www.instagram.com/pfmp.adv?igsh=NWN6MTVuMXFpeHVm"
              >
                <FaInstagram color="#efefef" size={26} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/pfmp-advogados/"
              >
                <FaLinkedin color="#efefef" size={26} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp color="#efefef" size={26} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            © 2025 PFMP Advogados | Todos os direitos reservados | Feito por{" "}
            <a
              style={{ fontWeight: "bold", cursor: "pointer", color: "#203029", textDecoration: "none" }}
              target="_blank"
              href="https://www.linkedin.com/in/joaopiller/"
            >
              João Vicente Piller
            </a>
          </p>
        </div>
      </footer>
    );
}