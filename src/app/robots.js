export default function robots() {
  const baseUrl = "http://pfmpadv.com.br"; 
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
