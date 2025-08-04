import styles from "./styles.module.css";
import logo from "../../assets/logo_header.png";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <img
        onClick={handleLogoClick}
        className={styles.logo}
        src={logo}
        alt="logo"
      />

      <button className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={40} /> : <HiMenu size={40} />}
      </button>

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

      <nav
        className={`${styles.mobileNav} ${
          isMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <button className={styles.closeButton} onClick={closeMenu}>
          <HiX size={24} />
        </button>
        <Link className={styles.mobileNavItem} to="/" onClick={closeMenu}>
          Início
        </Link>
        <Link
          className={styles.mobileNavItem}
          to="/quem-somos"
          onClick={closeMenu}
        >
          Quem Somos
        </Link>
        <Link className={styles.mobileNavItem} to="/equipe" onClick={closeMenu}>
          Equipe
        </Link>
        <Link
          className={styles.mobileNavItem}
          to="/areas-de-atuacao"
          onClick={closeMenu}
        >
          Áreas de Atuação
        </Link>
        <Link
          className={styles.mobileNavItem}
          to="/publicacoes"
          onClick={closeMenu}
        >
          Publicações
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileContactButton}
          onClick={closeMenu}
        >
          <FaWhatsapp size={18} />
          Fale conosco
        </a>
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
