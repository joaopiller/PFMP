import Image from "next/image";
import styles from "./styles.module.css";
import footerImage from "@/assets/images/logo_bege.png";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CONTACT, SOCIAL_LINKS, WHATSAPP_URL } from "@/config/site";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image
          className={styles.footerImage}
          src={footerImage}
          alt="Logo PFMP Advogados"
          priority
          width={240}
        />
        <div className={styles.footerInfo}>
          <h2>Endereço</h2>
          <p>{CONTACT.address.street}</p>
          <p>
            {CONTACT.address.district}, {CONTACT.address.city} -{" "}
            {CONTACT.address.state}
          </p>
          <p>CEP: {CONTACT.address.zipCode}</p>
        </div>

        <div className={styles.footerInfo}>
          <h2>Contato</h2>
          <p>
            Telefone:{" "}
            <a href={`tel:+55${CONTACT.phone}`} className={styles.phoneLink}>
              {CONTACT.phoneDisplay}
            </a>
          </p>
          <div className={styles.socialMedia}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={SOCIAL_LINKS.instagram}
              aria-label="Instagram do PFMP Advogados"
            >
              <FaInstagram color="#efefef" size={26} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={SOCIAL_LINKS.linkedin}
              aria-label="LinkedIn do PFMP Advogados"
            >
              <FaLinkedin color="#efefef" size={26} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do PFMP Advogados"
            >
              <FaWhatsapp color="#efefef" size={26} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} PFMP Advogados | Todos os direitos
          reservados | Feito por{" "}
          <a
            className={styles.creditLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/joaopiller/"
          >
            João Vicente Piller
          </a>
        </p>
      </div>
    </footer>
  );
}
