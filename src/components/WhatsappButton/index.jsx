"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/config/site";
import styles from "./styles.module.css";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Pequeno atraso para o botão "entrar" na tela após o carregamento.
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`${styles.whatsappButton} ${isVisible ? styles.visible : ""}`}
    >
      <FaWhatsapp size={32} aria-hidden="true" />
    </a>
  );
}
