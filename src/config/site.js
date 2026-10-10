export const SITE_URL = "https://www.pfmpadv.com.br";
export const SITE_NAME = "PFMP Advogados";
export const SITE_DESCRIPTION =
  "Consultoria e defesa tributária para empresas e pessoas físicas, com soluções fiscais estratégicas, digitais e seguras em todo o Brasil.";

export const CONTACT = {
  phone: "31997127831",
  phoneDisplay: "(31) 99712-7831",
  whatsappMessage: "Olá, gostaria de entrar em contato!",
  address: {
    street: "Rua Paraíba nº 550, sala 900",
    district: "Savassi",
    city: "Belo Horizonte",
    state: "MG",
    zipCode: "30130-141",
  },
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/pfmp.adv",
  linkedin: "https://www.linkedin.com/company/pfmp-advogados/",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(
  CONTACT.whatsappMessage
)}`;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/equipe", label: "Equipe" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/publicacoes", label: "Publicações" },
];
