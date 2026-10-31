import posts from "@/data/posts";

// As datas dos posts são cadastradas no formato "dd/mm/aaaa".
export function parsePostDate(date) {
  const [day, month, year] = date.split("/").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}

function normalizeId(id) {
  let value = String(id);
  try {
    value = decodeURIComponent(value);
  } catch {
    // Mantém o valor original se a URL vier com encoding inválido.
  }
  return value.trim().toLowerCase();
}

// Mais recentes primeiro, independente da ordem em que foram cadastrados.
const sortedPosts = [...posts].sort(
  (a, b) => parsePostDate(b.date) - parsePostDate(a.date)
);

export function getAllPosts() {
  return sortedPosts;
}

export function getPostById(id) {
  const key = normalizeId(id);
  return sortedPosts.find((post) => normalizeId(post.id) === key) ?? null;
}

// Apenas os campos usados nos cards, para não enviar o conteúdo completo
// dos artigos para componentes client-side.
export function getPostSummaries(limit) {
  const summaries = sortedPosts.map(
    ({ id, title, description, image, date }) => ({
      id,
      title,
      description,
      image,
      date,
    })
  );
  return limit ? summaries.slice(0, limit) : summaries;
}
