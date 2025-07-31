import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import QuemSomos from "./pages/QuemSomos";
import MembroDetalhes from "./pages/MembroDetalhes";
import Publicacoes from "./pages/Publicacoes";
import Publicacao from "./pages/Publicacao";
import AreasDeAtuacao from "./pages/AreasDeAtuacao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "equipe",
        element: <Equipe />,
      },
      {
        path: "equipe/:memberId",
        element: <MembroDetalhes />,
      },
      {
        path: "quem-somos",
        element: <QuemSomos />,
      },
      {
        path: "areas-de-atuacao",
        element: <AreasDeAtuacao />,
      },
      {
        path: "publicacoes",
        element: <Publicacoes />,
      },
      {
        path: "publicacoes/:publicacaoId",
        element: <Publicacao />,
      },
    ],
  },
]);

export default router;
