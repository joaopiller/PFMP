"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./styles.module.css";
import logo from "@/assets/images/logo_header.png";
import { NAV_LINKS, WHATSAPP_URL } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} className={styles.navItem} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <nav
        className={`${styles.mobileNav} ${
          isMenuOpen ? styles.mobileNavOpen : ""
        }`}
      >
        <button className={styles.closeButton} onClick={closeMenu}>
          <HiX size={24} />
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            className={styles.mobileNavItem}
            href={href}
            onClick={closeMenu}
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
