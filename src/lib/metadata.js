import { SITE_NAME, SITE_TITLE } from "@/config/site";

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
