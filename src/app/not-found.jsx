import NotFoundMessage from "@/components/NotFoundMessage";

export const metadata = { title: "Página não encontrada" };

export default function NotFound() {
  return (
    <NotFoundMessage
      message="Página não encontrada."
      linkHref="/"
      linkLabel="Voltar para a home"
    />
  );
}
