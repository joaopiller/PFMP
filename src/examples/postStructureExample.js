// Exemplo de como modificar a estrutura de dados dos posts
// Para usar a nova estrutura, adicione um campo 'content' em cada post

const examplePost = {
    id: "exemplo-post",
    title: "Exemplo de Post com Conteúdo Rico",
    date: "12/08/2025",
    authors: "Victor Hugo Piller e Flávia Perim",
    description: "Exemplo demonstrando como usar a nova estrutura de conteúdo",
    image: "caminho/para/imagem.jpg",
    
    // Estrutura antiga (manter para compatibilidade)
    paragraphs: [
        "Texto simples sem formatação..."
    ],
    
    // Nova estrutura rica
    content: [
        {
            type: "paragraph",
            text: "Este é um parágrafo com ### Subtítulo no meio do texto. Você pode adicionar [links clicáveis](https://www.exemplo.com) no meio do texto."
        },
        {
            type: "subtitle",
            text: "Este é um Subtítulo como Elemento Separado"
        },
        {
            type: "paragraph",
            text: "A ### Lei Complementar nº 182 estabelece o [Marco Legal das Startups](https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp182.htm) no Brasil."
        },
        {
            type: "unordered_list",
            items: [
                "Primeiro item da lista sem formatação",
                "Segundo item com ### Subtítulo no Item",
                "Terceiro item com [link para site](https://www.exemplo.com)",
                "Quarto item com ### Outro Subtítulo"
            ]
        },
        {
            type: "ordered_list", 
            items: [
                "### Primeiro passo: análise da legislação atual",
                "### Segundo passo: identificação das [principais mudanças](https://www.exemplo.com)",
                "### Terceiro passo: implementação de compliance adequado",
                "### Quarto passo: monitoramento contínuo"
            ]
        },
        {
            type: "paragraph",
            text: "Para concluir, é importante destacar que a ### conformidade legal é essencial para o sucesso de qualquer startup no mercado brasileiro."
        }
    ]
};

// Sintaxe de formatação suportada:
// ### Título = subtítulo (h3)  
// [texto](url) = link

export default examplePost;
