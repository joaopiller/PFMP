import HomeAreasDeAtuacao from "../../components/HomeAreasDeAtuação";
import HomeBanner from "../../components/HomeBanner";
import HomeEquipe from "../../components/HomeEquipe";
import HomePublicacoes from "../../components/HomePublicacoes";
import HomeQuemSomos from "../../components/HomeQuemSomos";
import NossosDiferenciais from "../../components/NossosDiferenciais";

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
