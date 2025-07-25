import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import QuemSomos from "./pages/QuemSomos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
          path: "equipe",
          element: <Equipe />
        },
        {
          path: "quem-somos",
          element: <QuemSomos />
        }
    ]
  },
]);

export default router;
