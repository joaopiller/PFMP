export default function robots() {
  const baseUrl = "https://www.pfmpadv.com.br"; 
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
