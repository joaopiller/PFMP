import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsappButton";

export default function RootLayout() {
    return (
      <>
      <Header/>
        <main>
          <Outlet />
        </main>
        <WhatsAppButton />
      </>
    );
}