import AreasDeAtuacao from "../../components/AreasDeAtuação";
import HomeBanner from "../../components/HomeBanner";
import HomeEquipe from "../../components/HomeEquipe";
import HomePublicacoes from "../../components/HomePublicacoes";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AreasDeAtuacao />
      <HomeQuemSomos />
      <NossosDiferenciais />
      <HomeEquipe />
      <HomePublicacoes />
    </>
  );
}
