"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./styles.module.css";
import logo from "@/assets/images/logo_header.png";
import { NAV_LINKS, WHATSAPP_URL } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Com o menu mobile aberto: trava o scroll da página e fecha com Esc.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoLink}>
        <Image
          className={styles.logo}
          src={logo}
          alt="PFMP Advogados - página inicial"
          width={170}
          priority
        />
      </Link>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="menu-mobile"
      >
        {isMenuOpen ? <HiX size={40} /> : <HiMenu size={40} />}
      </button>

      <nav className={styles.navBox} aria-label="Navegação principal">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            className={styles.navItem}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      <nav
        id="menu-mobile"
        aria-label="Navegação principal"
        className={`${styles.mobileNav} ${
          isMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Fechar menu"
        >
          <HiX size={24} />
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            className={styles.mobileNavItem}
            href={href}
            onClick={closeMenu}
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}

        <a
          href={WHATSAPP_URL}
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
        href={WHATSAPP_URL}
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
