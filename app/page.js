import Link from "next/link";

const tools = [
  { name: "Cover Letter Generator", desc: "Paste a job description + your background, get a tailored letter.", tag: "Job seekers", href: "/cover-letter", icon: "📝", color: "#1D9E75", bg: "#E1F5EE" },
  { name: "Email Rewriter", desc: "Turn a rough or awkward email into a polished, professional one.", tag: "Everyone", href: "/email-rewriter", icon: "✉️", color: "#378ADD", bg: "#E6F1FB" },
  { name: "Essay Intro Writer", desc: "Give a topic and thesis, get a strong opening paragraph.", tag: "Students", href: "/essay-intro", icon: "🎓", color: "#534AB7", bg: "#EEEDFE" },
  { name: "YouTube Title Generator", desc: "Describe your video, get 10 click-worthy titles.", tag: "Creators", href: "/youtube-titles", icon: "🎬", color: "#D85A30", bg: "#FAECE7" },
  { name: "Cold Email Writer", desc: "Personalized outreach that doesn't sound like a template.", tag: "Marketers", href: "/cold-email", icon: "🚀", color: "#BA7517", bg: "#FAEEDA" },
  { name: "Complaint Letter Writer", desc: "Firm, clear, effective complaint letters in seconds.", tag: "Everyone", href: "/complaint-letter", icon: "📣", color: "#D4537E", bg: "#FBEAF0" },
  { name: "Resignation Letter Generator", desc: "A professional, gracious resignation letter that keeps the door open.", tag: "Job seekers", href: "/resignation-letter", icon: "👋", color: "#1D9E75", bg: "#E1F5EE" },
  { name: "Out-of-Office Generator", desc: "A clear, professional auto-reply for when you're away.", tag: "Everyone", href: "/out-of-office", icon: "🏝️", color: "#378ADD", bg: "#E6F1FB" },
  { name: "Freelance Rate Helper", desc: "Describe your work, get a reasoned rate range and how to justify it.", tag: "Business", href: "/freelance-rate", icon: "💰", color: "#639922", bg: "#EAF3DE" },
  { name: "Performance Review Phrases", desc: "Turn rough notes into clear, constructive review phrases.", tag: "Business", href: "/performance-review", icon: "⭐", color: "#534AB7", bg: "#EEEDFE" },
];

export default function Home() {
  return (
    <main>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .tool-card { animation: fadeUp 0.5s ease both; transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
        .tool-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px -12px var(--glow); border-color: var(--accent); }
        .tool-icon { transition: transform 0.18s ease; }
        .tool-card:hover .tool-icon { transform: scale(1.12) rotate(-4deg); }
        .hero-fade { animation: fadeUp 0.6s ease both; }
      `}</style>

      <nav style={{ borderBottom: "1px solid var(--line)", padding: "16px 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, color: "var(--green)" }}>Tooly</div>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: "var(--muted)" }}>
            <span>Tools</span><span>About</span>
          </div>
        </div>
      </nav>

      <section className="wrap hero-fade" style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16 }}>
          ✨ Free AI tools
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
          {tools.map((t, i) => (
            <Link key={t.name} href={t.href} className="tool-card" style={{
              background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
              padding: "24px", display: "block",
              animationDelay: `${i * 0.05}s`,
              "--accent": t.color, "--glow": t.bg,
            }}>
              <div className="tool-icon" style={{
                width: 48, height: 48, borderRadius: 12, background: t.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 16,
              }}>{t.icon}</div>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 500, background: t.bg, color: t.color, padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5 }}>{t.tag}</span>
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
