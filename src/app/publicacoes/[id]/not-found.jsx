import NotFoundMessage from "@/components/NotFoundMessage";

export default function NotFound() {
  return (
    <NotFoundMessage
      message="Publicação não encontrada."
      linkHref="/publicacoes"
      linkLabel="Ver todas as publicações"
    />
  );
}
