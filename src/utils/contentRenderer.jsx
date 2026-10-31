const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

// Converte links no formato markdown [texto](url) em âncoras externas.
function renderInline(text, styles) {
  if (!text) return text;

  const parts = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [fullMatch, label, href] = match;

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {label}
      </a>
    );
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

// Renderiza o array `content` de um post (ver src/data/posts.js).
export function renderContent(content, styles) {
  if (!Array.isArray(content)) return null;

  return content.map((item, index) => {
    switch (item.type) {
      case "subtitle":
        return (
          <h3 key={index} className={styles.subtitle}>
            {item.text}
          </h3>
        );

      case "paragraph":
        return (
          <p key={index} className={styles.paragraph}>
            {renderInline(item.text, styles)}
          </p>
        );

      case "unordered_list":
      case "ordered_list": {
        const List = item.type === "ordered_list" ? "ol" : "ul";
        const listClass =
          item.type === "ordered_list"
            ? styles.orderedList
            : styles.unorderedList;

        return (
          <List key={index} className={listClass}>
            {item.items.map((listItem, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>
                {renderInline(listItem, styles)}
              </li>
            ))}
          </List>
        );
      }

      default:
        return null;
    }
  });
}
