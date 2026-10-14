import { SITE_NAME, SITE_TITLE } from "@/config/site";

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
      ...openGraph,
    },
  };
}
