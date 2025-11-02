import PageBanner from "@/components/PageBanner";
import publicacoes from "@/assets/images/banner_publicacoes.jpg";
import PublicacoesClient from "./PublicacoesClient";

export const metadata = {
  title: "Publicações | PFMP Advogados",
  description: "Leia as publicações do escritório PFMP Advogados.",
};

export default function Publicacoes() {
  return (
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <PublicacoesClient />
    </>
  );
}
