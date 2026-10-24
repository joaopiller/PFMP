import NotFoundMessage from "@/components/NotFoundMessage";

export default function NotFound() {
  return (
    <NotFoundMessage
      message="Membro não encontrado."
      linkHref="/equipe"
      linkLabel="Ver toda a equipe"
    />
  );
}
