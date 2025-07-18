import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "22988587782";
  const message = "Olá, gostaria de entrar em contato!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        transform: isVisible
          ? "translateX(0) scale(1)"
          : "translateX(100px) scale(0.8)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
