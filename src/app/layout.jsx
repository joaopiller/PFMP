import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata = {
  title: "PFMP Advogados",
  description: "Consultoria e defesa tributária para empresas e pessoas físicas, com soluções fiscais estratégicas, digitais e seguras em todo o Brasil.",
  keywords: ["advocacia", "direito tributário", "consultoria", "empresas", "pessoas físicas"],
  authors: ["PFMP Advogados"],
  creator: "PFMP Advogados",
  publisher: "PFMP Advogados",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
