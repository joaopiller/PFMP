import styles from "./styles.module.css";
import logo from "../../assets/logo_header.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={styles.navBox}>
        <Link className={styles.navItem} to="/">
          Início
        </Link>
        <Link className={styles.navItem} to="/quem-somos">
          Quem Somos
        </Link>
        <Link className={styles.navItem} to="/equipe">
          Equipe
        </Link>
        <Link className={styles.navItem} to="/areas-de-atuacao">
          Áreas de Atuação
        </Link>
        <Link className={styles.navItem} to="/publicacoes">
          Publicações
        </Link>
      </nav>
      <button className={styles.contactButton}>
        <FaWhatsapp size={18} />
        Fale conosco
      </button>
    </header>
  );
}
