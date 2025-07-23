import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
      <>
      <Header/>
        <main>
          <Outlet />
        </main>
        <WhatsAppButton />
        <Footer />
      </>
    );
}