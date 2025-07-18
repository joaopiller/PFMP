import styles from './styles.module.css';
import logo from '../../assets/logo_teste.svg';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.navBox}>
          <a className={styles.navItem} href="">
            Home
          </a>
          <a className={styles.navItem} href="">
            Quem Somos
          </a>
          <a className={styles.navItem} href="">
            Equipe
          </a>
          <a className={styles.navItem} href="">
            Áreas de Atuação
          </a>
          <a className={styles.navItem} href="">
            Publicações
          </a>
        </nav>
        <button className={styles.contactButton}>
          <FaWhatsapp size={18} />
          Fale conosco
        </button>
      </header>
    );
}