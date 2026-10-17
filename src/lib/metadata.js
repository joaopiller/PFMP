import {
  CONTACT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/config/site";

// Imagens importadas estaticamente viram objetos (StaticImageData);
// o Open Graph precisa de { url, width, height }.
export function toOpenGraphImage(image, alt) {
  return { url: image.src, width: image.width, height: image.height, alt };
}

// Imagem 1200x630 usada nas prévias de links das páginas institucionais.
export const DEFAULT_SHARE_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

// Gera a metadata de uma página com canonical e Open Graph consistentes.
// As URLs são relativas e resolvidas pelo metadataBase do layout raiz.
export function buildMetadata({ title, description, path, openGraph = {} }) {
  return {
    // Sem título explícito, a página herda o título padrão do layout raiz.
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${SITE_NAME}` : SITE_TITLE,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [DEFAULT_SHARE_IMAGE],
      ...openGraph,
    },
  };
}

export function legalServiceJsonLd() {
  const { address } = CONTACT;

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    image: `${SITE_URL}${DEFAULT_SHARE_IMAGE.url}`,
    telephone: `+55${CONTACT.phone}`,
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      addressCountry: "BR",
    },
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function articleJsonLd(post, publishedAt) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: publishedAt.toISOString(),
    author: { "@type": "Person", name: post.authors },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: encodeURI(`${SITE_URL}/publicacoes/${post.id}`),
  };
}
