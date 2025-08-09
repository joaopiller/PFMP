import styles from './styles.module.css';
import footerImage from '../../assets/images/logo_bege.png';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
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
            <p>Email: contato@pfmp.com.br</p>
            <p>Telefone: (31) 99712-7831</p>
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