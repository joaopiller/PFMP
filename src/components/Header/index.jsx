"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./styles.module.css";
import logo from "@/assets/images/logo_header.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "31997127831";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Logo PFMP Advogados"
          width={170}
          priority
        />
      </Link>

      <button className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <HiX size={40} /> : <HiMenu size={40} />}
      </button>

      <nav className={styles.navBox}>
        <Link className={styles.navItem} href="/">
          Início
        </Link>
        <Link className={styles.navItem} href="/quem-somos">
          Quem Somos
        </Link>
        <Link className={styles.navItem} href="/equipe">
          Equipe
        </Link>
        <Link className={styles.navItem} href="/areas-de-atuacao">
          Áreas de Atuação
        </Link>
        <Link className={styles.navItem} href="/publicacoes">
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

        <Link className={styles.mobileNavItem} href="/" onClick={closeMenu}>
          Início
        </Link>
        <Link
          className={styles.mobileNavItem}
          href="/quem-somos"
          onClick={closeMenu}
        >
          Quem Somos
        </Link>
        <Link
          className={styles.mobileNavItem}
          href="/equipe"
          onClick={closeMenu}
        >
          Equipe
        </Link>
        <Link
          className={styles.mobileNavItem}
          href="/areas-de-atuacao"
          onClick={closeMenu}
        >
          Áreas de Atuação
        </Link>
        <Link
          className={styles.mobileNavItem}
          href="/publicacoes"
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
