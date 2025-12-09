export default function robots() {
  const baseUrl = "https://pfmpadv.com.br"; 
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
