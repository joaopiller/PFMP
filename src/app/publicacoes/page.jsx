import PageBanner from "@/components/PageBanner";
import publicacoes from "@/assets/images/banner_publicacoes.jpg";
import PublicacoesClient from "./PublicacoesClient";
import { getPostSummaries } from "@/lib/posts";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Publicações",
  description: "Leia as publicações do escritório PFMP Advogados.",
  path: "/publicacoes",
});

export default function Publicacoes() {
  return (
    <>
      <PageBanner image={publicacoes} title="Publicações" />
      <PublicacoesClient posts={getPostSummaries()} />
    </>
  );
}
