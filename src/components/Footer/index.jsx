import styles from './styles.module.css';
import footerImage from '../../assets/logo_bege.png';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <img className={styles.footerImage} src={footerImage} alt="" />
          <div className={styles.footerInfo}>
            <h2>Endereço</h2>
            <p>
              Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem,
              Niterói - RJ
            </p>
            <p>CEP: 24210-315 </p>
          </div>
          <div className={styles.footerInfo}>
            <h2>Contato</h2>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (21) 99999-9999</p>
            <div className={styles.socialMedia}>
              <a href="">
                <FaInstagram color="#efefef" size={26} />
              </a>
              <a href="">
                <FaLinkedin color="#efefef" size={26} />
              </a>
              <a href="">
                <FaWhatsapp color="#efefef" size={26} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
            <p>© 2025 PFMP Advogados | Todos os direitos reservados</p>
        </div>
      </footer>
    );
}