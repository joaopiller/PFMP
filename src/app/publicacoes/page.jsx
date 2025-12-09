import PageBanner from "@/components/PageBanner";
import publicacoes from "@/assets/images/banner_publicacoes.jpg";
import PublicacoesClient from "./PublicacoesClient";

export const metadata = {
  title: "Publicações | PFMP Advogados",
  description: "Leia as publicações do escritório PFMP Advogados.",
  alternates: {
    canonical: "https://www.pfmpadv.com.br/publicacoes",
  },
  openGraph: {
    title: "Publicações | PFMP Advogados",
    description: "Leia as publicações do escritório PFMP Advogados.",
    url: "https://www.pfmpadv.com.br/publicacoes",
    siteName: "PFMP Advogados",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Publicacoes() {
  return (
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <PublicacoesClient />
    </>
  );
}
