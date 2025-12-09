import HomeAreasDeAtuacao from "@/components/HomeAreasDeAtuação";
import HomeBanner from "@/components/HomeBanner";
import HomeEquipe from "@/components/HomeEquipe";
import HomePublicacoes from "@/components/HomePublicacoes";
import HomeQuemSomos from "@/components/HomeQuemSomos";
import NossosDiferenciais from "@/components/NossosDiferenciais";

export const metadata = {
  title: "PFMP Advogados",
  description:
    "Consultoria e defesa tributária para empresas e pessoas físicas, com soluções fiscais estratégicas, digitais e seguras em todo o Brasil.",
  alternates: {
    canonical: "https://www.pfmpadv.com.br",
  },
  openGraph: {
    title: "PFMP Advogados",
    description:
      "Consultoria e defesa tributária para empresas e pessoas físicas, com soluções fiscais estratégicas, digitais e seguras em todo o Brasil.",
    url: "https://www.pfmpadv.com.br",
    siteName: "PFMP Advogados",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAreasDeAtuacao />
      <HomeQuemSomos />
      <NossosDiferenciais />
      <HomeEquipe />
      <HomePublicacoes />
    </>
  );
}
