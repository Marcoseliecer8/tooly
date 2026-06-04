import Link from "next/link";

const tools = [
  { name: "Cover Letter Generator", desc: "Paste a job description + your background, get a tailored letter.", tag: "Job seekers", href: "/cover-letter" },
  { name: "Email Rewriter", desc: "Turn a rough or awkward email into a polished, professional one.", tag: "Everyone", href: "/email-rewriter" },
  { name: "Essay Intro Writer", desc: "Give a topic and thesis, get a strong opening paragraph.", tag: "Students", href: "/essay-intro" },
  { name: "YouTube Title Generator", desc: "Describe your video, get 10 click-worthy titles.", tag: "Creators", href: "/youtube-titles" },
  { name: "Cold Email Writer", desc: "Personalized outreach that doesn't sound like a template.", tag: "Marketers", href: "/cold-email" },
  { name: "Complaint Letter Writer", desc: "Firm, clear, effective complaint letters in seconds.", tag: "Everyone", href: "/complaint-letter" },
];

export default function Home() {
  return (
    <main>
      <nav style={{ borderBottom: "1px solid var(--line)", padding: "16px 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, color: "var(--green)" }}>Tooly</div>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: "var(--muted)" }}>
            <span>Tools</span><span>About</span>
          </div>
        </div>
      </nav>

      <section className="wrap" style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16 }}>
          Free AI tools
        </div>
        <h1 style={{ fontSize: 56, fontWeight: 700, maxWidth: 640, margin: "0 auto 20px" }}>
          One sharp tool for every small job.
        </h1>
        <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 480, margin: "0 auto" }}>
          No bloat, no login. Just paste, click, done. Free to use.
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {tools.map((t) => (
            <Link key={t.name} href={t.href} style={{
              background: "#fff", border: "1px solid var(--line)", borderRadius: 14,
              padding: "22px 24px", display: "block",
            }}>
              <div style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 500, background: "var(--surface)", color: "var(--green-dark)", padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5 }}>{t.tag}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 6 }}>{t.name}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)" }}>{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "28px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)" }}>
          <span style={{ fontWeight: 500, color: "var(--green)" }}>Tooly</span>
          <span>Made with care · usetooly.io</span>
        </div>
      </footer>
    </main>
  );
}
