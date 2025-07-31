import styles from "./styles.module.css";
import logo from "../../assets/logo_header.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const phoneNumber = "22988587782";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  
  return (
    <header className={styles.header}>
      <img onClick={handleLogoClick} className={styles.logo} src={logo} alt="logo" />
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
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactButton}
      >
        <FaWhatsapp size={18} />
        Fale conosco
      </a>
    </header>
  );
}
