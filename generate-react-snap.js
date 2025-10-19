// generate-react-snap.js
import fs from "fs";
import publicacoes from "./src/data/posts.js";

const staticRoutes = [
  "/",
  "/equipe",
  "/quem-somos",
  "/areas-de-atuacao",
  "/publicacoes"
];

// 🧩 Rotas dinâmicas de publicações (ex: /publicacoes/pfmp-advogados)
const publicacaoRoutes = publicacoes.map(
  (pub) => `/publicacoes/${pub.id}`
);

// Combina tudo
const allRoutes = [...staticRoutes, ...publicacaoRoutes];

// Lê e atualiza o package.json
const packageJsonPath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Garante que o campo reactSnap exista
if (!packageJson.reactSnap) packageJson.reactSnap = {};

// Atualiza o campo include
packageJson.reactSnap.include = allRoutes;

// Escreve de volta
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));