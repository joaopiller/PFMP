import posts from "@/data/posts";

export default function sitemap() {
  const baseUrl = "http://pfmpadv.com.br";
  const now = new Date().toISOString();

  const staticPages = [
    "", 
    "equipe",
    "quem-somos",
    "areas-de-atuacao",
    "publicacoes",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.9,
  }));

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/publicacoes/${post.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticUrls, ...postUrls];
}
