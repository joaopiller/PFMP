"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/config/site";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        borderBottomLeftRadius: "4px",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 1000,
        cursor: "pointer",
        transform: isVisible
          ? "translateX(0) scale(1)"
          : "translateX(100px) scale(0.8)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      onMouseEnter={(e) => {
        if (isVisible)
          e.currentTarget.style.transform = "translateX(0) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        if (isVisible)
          e.currentTarget.style.transform = "translateX(0) scale(1)";
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
