import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/config/site";

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    "", 
    "equipe",
    "quem-somos",
    "areas-de-atuacao",
    "publicacoes",
  ];

  const staticUrls = staticPages.map((path) => {
    const url = path === "" ? SITE_URL : `${SITE_URL}/${path}`;
    
    return {
      url: url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: path === "" ? 1.0 : 0.9,
    };
  });

  const postUrls = getAllPosts().map((post) => ({
    url: `${SITE_URL}/publicacoes/${post.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticUrls, ...postUrls];
}