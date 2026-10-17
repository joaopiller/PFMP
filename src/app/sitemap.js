import { getAllPosts, parsePostDate } from "@/lib/posts";
import { NAV_LINKS, SITE_URL } from "@/config/site";

export default function sitemap() {
  const now = new Date();

  const staticUrls = NAV_LINKS.map(({ href }) => ({
    url: href === "/" ? SITE_URL : `${SITE_URL}${href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: href === "/" ? 1.0 : 0.9,
  }));

  const postUrls = getAllPosts().map((post) => ({
    // encodeURI garante URLs válidas para ids com acento.
    url: encodeURI(`${SITE_URL}/publicacoes/${post.id}`),
    lastModified: parsePostDate(post.date),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticUrls, ...postUrls];
}
