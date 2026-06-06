// Server component (no "use client") — this content renders into the HTML
// so search engines read it reliably.
export default function ToolSeo({ tool }) {
  if (!tool.seo) return null;
  return (
    <div className="wrap" style={{ maxWidth: 720, paddingBottom: 80 }}>
      <article style={{ borderTop: "1px solid var(--line)", paddingTop: 40 }}>
        {tool.seo.sections.map((s, i) => (
          <section key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>{s.heading}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 16, color: "var(--ink)", marginBottom: 14, lineHeight: 1.7 }}>{p}</p>
            ))}
          </section>
        ))}
        {tool.seo.faq && (
          <section style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Frequently asked questions</h2>
            {tool.seo.faq.map((qa, i) => (
              <div key={i} style={{ marginBottom: 22 }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{qa.q}</h3>
                <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7 }}>{qa.a}</p>
              </div>
            ))}
          </section>
        )}
      </article>
    </div>
  );
}
