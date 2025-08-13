import React from 'react';

// Função para processar texto com markdown simples
const processText = (text) => {
  if (!text) return text;
  
  const parts = [];
  let lastIndex = 0;
  
  // Regex para encontrar padrões de formatação
  const patterns = [
    { regex: /###\s+(.*?)(?=\n|$)/g, type: 'h3' },      // ### Título
    { regex: /\[([^\]]+)\]\(([^)]+)\)/g, type: 'link' }  // [texto](url)
  ];
  
  // Array para armazenar todas as matches com suas posições
  const allMatches = [];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.regex.exec(text)) !== null) {
      allMatches.push({
        type: pattern.type,
        match: match,
        start: match.index,
        end: match.index + match[0].length
      });
    }
  });
  
  // Ordenar matches por posição
  allMatches.sort((a, b) => a.start - b.start);
  
  // Processar matches em ordem
  allMatches.forEach((matchInfo, index) => {
    const { type, match, start, end } = matchInfo;
    
    // Adicionar texto antes do match
    if (start > lastIndex) {
      parts.push(text.substring(lastIndex, start));
    }
    
    // Adicionar elemento formatado
    switch (type) {
      case 'h3':
        parts.push(
          <h3 key={`h3-${index}`} style={{ 
            color: '#db9f5d', 
            fontSize: '1.2em', 
            fontWeight: 'bold',
            margin: '1.5em 0 1em 0'
          }}>
            {match[1]}
          </h3>
        );
        break;
      case 'link':
        parts.push(
          <a 
            key={`link-${index}`} 
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#db9f5d', textDecoration: 'none' }}
          >
            {match[1]}
          </a>
        );
        break;
      default:
        parts.push(match[0]);
    }
    
    lastIndex = end;
  });
  
  // Adicionar texto restante
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 1 ? parts : text;
};

// Função principal para renderizar conteúdo
export const renderContent = (contentArray, styles) => {
  if (!contentArray || !Array.isArray(contentArray)) {
    return null;
  }
  
  return contentArray.map((item, index) => {
    switch (item.type) {
      case 'subtitle':
        return (
          <h3
            key={`subtitle-${index}`}
            style={{
              color: "#354f44",
              fontSize: "1.2rem",
              fontWeight: "bold",
              fontFamily: "var(--font-scandia-medium)",
              margin: "1rem 0 1rem 0",
              lineHeight: "1.5rem"
            }}
          >
            {item.text}
          </h3>
        );
        
      case 'paragraph':
        return (
          <p key={`paragraph-${index}`} className={styles.paragraph}>
            {processText(item.text)}
          </p>
        );
        
      case 'unordered_list':
        return (
          <ul key={`ul-${index}`} className={styles.unorderedList}>
            {item.items.map((listItem, itemIndex) => (
              <li key={`ul-item-${index}-${itemIndex}`} className={styles.listItem}>
                {processText(listItem)}
              </li>
            ))}
          </ul>
        );
        
      case 'ordered_list':
        return (
          <ol key={`ol-${index}`} className={styles.orderedList}>
            {item.items.map((listItem, itemIndex) => (
              <li key={`ol-item-${index}-${itemIndex}`} className={styles.listItem}>
                {processText(listItem)}
              </li>
            ))}
          </ol>
        );
        
      default:
        return null;
    }
  });
};

// Função auxiliar para renderizar texto simples com formatação
export const renderSimpleText = (text) => {
  return processText(text);
};
