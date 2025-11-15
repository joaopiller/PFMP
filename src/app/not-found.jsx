import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          margin: 0,
          fontFamily: "var(--font-scandia-regular)",
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          margin: "1rem 0",
          fontFamily: "var(--font-scandia-regular)",
        }}
      >
        Página não encontrada.
      </p>
      <Link href="/">
        <button
          style={{
            padding: "0.75rem 1.25rem",
            background: "#354f44",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontFamily: "var(--font-scandia-medium)",
          }}
        >
          Voltar para a home
        </button>
      </Link>
    </main>
  );
}
