# PFMP Advogados

Site institucional do **PFMP Advogados**, escritório especializado em Direito Tributário com atuação em todo o Brasil.

O site apresenta o escritório, a equipe e as áreas de atuação, e mantém um blog com artigos sobre temas tributários publicados pelos sócios.

🔗 **[www.pfmpadv.com.br](https://www.pfmpadv.com.br)**

## Funcionalidades

- Páginas institucionais: Início, Quem Somos, Equipe, Áreas de Atuação e Publicações
- Perfil individual de cada advogado, com formação, áreas de atuação e publicações
- Blog com busca (sem distinção de acentos) e paginação
- Todas as páginas pré-renderizadas como HTML estático (SSG)
- SEO: metadata por página, Open Graph com imagem, `sitemap.xml`, `robots.txt` e dados estruturados (JSON-LD)
- Layout responsivo, com menu mobile
- Acessibilidade: navegação por teclado, foco visível, link "Pular para o conteúdo" e rótulos ARIA
- Contato direto pelo WhatsApp

## Tecnologias

- [Next.js 15](https://nextjs.org/) (App Router) e React 19
- CSS Modules
- [Swiper](https://swiperjs.com/) para o carrossel de áreas de atuação
- [React Icons](https://react-icons.github.io/react-icons/)
- ESLint e Prettier
- GitHub Actions (lint e build) e deploy na Vercel

## Como rodar

Requer Node.js 20 ou superior (veja `.nvmrc`).

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:3000`.

| Script           | Descrição                                  |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | Servidor de desenvolvimento                |
| `npm run build`  | Build de produção (gera páginas estáticas) |
| `npm run start`  | Serve o build de produção                  |
| `npm run lint`   | Analisa o código com ESLint                |
| `npm run format` | Formata o código com Prettier              |

## Estrutura

```
src/
├── app/            # Rotas (App Router), layout, sitemap e robots
├── components/     # Componentes reutilizáveis, cada um com seu CSS Module
├── config/site.js  # URL, contato, redes sociais e itens do menu
├── data/           # Conteúdo: artigos, equipe e áreas de atuação
├── lib/            # Acesso aos posts e helpers de metadata/SEO
├── utils/          # Renderizador do conteúdo dos artigos
└── assets/images/  # Imagens otimizadas pelo next/image
```

## Como publicar um novo artigo

Os artigos ficam em `src/data/posts.js`. Para publicar um novo:

1. Adicione a imagem de capa em `src/assets/images/`, com nome **sem acentos e sem espaços** (ex.: `transacao_pgfn_2026.jpg`).
2. Importe a imagem no topo de `posts.js`:

   ```js
   import transacaoPgfn from "../assets/images/transacao_pgfn_2026.jpg";
   ```

3. Adicione um objeto ao array `posts`:

   ```js
   {
     id: "transacao-pgfn-2026", // vira a URL: /publicacoes/transacao-pgfn-2026
     title: "Título do artigo",
     date: "15/01/2026", // dd/mm/aaaa
     authors: "Nome do autor",
     description: "Resumo exibido no card e nas buscas do Google.",
     image: transacaoPgfn,
     content: [
       { type: "subtitle", text: "Um subtítulo" },
       { type: "paragraph", text: "Texto com [um link](https://exemplo.com)." },
       { type: "unordered_list", items: ["Item 1", "Item 2"] },
       { type: "ordered_list", items: ["Passo 1", "Passo 2"] },
     ],
   },
   ```

Os artigos são ordenados automaticamente pela data, do mais recente para o mais antigo, então a posição no arquivo não importa. O `id` deve ser único e, de preferência, em letras minúsculas, sem acentos e com palavras separadas por hífen.

Antes de enviar, rode `npm run build` para conferir se está tudo certo. O mesmo build roda automaticamente no GitHub a cada push.

## Autor

Desenvolvido por [João Vicente Piller](https://www.linkedin.com/in/joaopiller/).
