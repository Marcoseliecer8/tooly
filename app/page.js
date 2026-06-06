"use client";

import { useState } from "react";
import Link from "next/link";

const tools = [
  { name: "Cover Letter Generator", short: "Cover Letter", desc: "Paste a job description + your background, get a tailored letter.", cat: "Job Seekers", href: "/cover-letter", icon: "📝", color: "#1D9E75", bg: "#E1F5EE" },
  { name: "Resignation Letter Generator", short: "Resignation", desc: "A professional, gracious resignation letter that keeps the door open.", cat: "Job Seekers", href: "/resignation-letter", icon: "👋", color: "#1D9E75", bg: "#E1F5EE" },
  { name: "Email Rewriter", short: "Email Rewriter", desc: "Turn a rough or awkward email into a polished, professional one.", cat: "Writing", href: "/email-rewriter", icon: "✉️", color: "#378ADD", bg: "#E6F1FB" },
  { name: "Essay Intro Writer", short: "Essay Intro", desc: "Give a topic and thesis, get a strong opening paragraph.", cat: "Writing", href: "/essay-intro", icon: "🎓", color: "#534AB7", bg: "#EEEDFE" },
  { name: "Complaint Letter Writer", short: "Complaint", desc: "Firm, clear, effective complaint letters in seconds.", cat: "Writing", href: "/complaint-letter", icon: "📣", color: "#D4537E", bg: "#FBEAF0" },
  { name: "Out-of-Office Generator", short: "Out-of-Office", desc: "A clear, professional auto-reply for when you're away.", cat: "Writing", href: "/out-of-office", icon: "🏝️", color: "#378ADD", bg: "#E6F1FB" },
  { name: "Thank You Note Writer", short: "Thank You", desc: "A warm, genuine thank you note for any occasion in seconds.", cat: "Writing", href: "/thank-you-note", icon: "🙏", color: "#D4537E", bg: "#FBEAF0" },
  { name: "Cold Email Writer", short: "Cold Email", desc: "Personalized outreach that doesn't sound like a template.", cat: "Business", href: "/cold-email", icon: "🚀", color: "#BA7517", bg: "#FAEEDA" },
  { name: "Freelance Rate Helper", short: "Freelance Rate", desc: "Describe your work, get a reasoned rate range and how to justify it.", cat: "Business", href: "/freelance-rate", icon: "💰", color: "#639922", bg: "#EAF3DE" },
  { name: "Performance Review Phrases", short: "Reviews", desc: "Turn rough notes into clear, constructive review phrases.", cat: "Business", href: "/performance-review", icon: "⭐", color: "#534AB7", bg: "#EEEDFE" },
  { name: "YouTube Title Generator", short: "YT Titles", desc: "Describe your video, get 10 click-worthy titles.", cat: "Creators", href: "/youtube-titles", icon: "🎬", color: "#D85A30", bg: "#FAECE7" },
  { name: "Bio Generator", short: "Bio", desc: "A sharp bio for Instagram, LinkedIn, Twitter, or anywhere.", cat: "Creators", href: "/bio-generator", icon: "👤", color: "#D85A30", bg: "#FAECE7" },
];

const categories = ["All", "Job Seekers", "Writing", "Business", "Creators"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = tools.filter((t) => {
    const matchesCat = cat === "All" || t.cat === cat;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <main>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .tool-card { animation: fadeUp 0.45s ease both; transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
        .tool-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px -12px var(--glow); border-color: var(--accent); }
        .tool-icon { transition: transform 0.18s ease; }
        .tool-card:hover .tool-icon { transform: scale(1.12) rotate(-4deg); }
        .tool-card:hover .go { opacity: 1; transform: translateX(0); }
        .go { opacity: 0; transform: translateX(-6px); transition: all 0.18s ease; color: var(--accent); font-weight: 600; }
        .hero-fade { animation: fadeUp 0.6s ease both; }
        .chip { cursor: pointer; transition: all 0.15s ease; }
        .chip:hover { border-color: var(--green); }
        .search-input:focus { outline: none; border-color: var(--green); box-shadow: 0 0 0 3px #1D9E7522; }

        .tools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
        .tile-name-mobile { display: none; }

        @media (max-width: 600px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
          .tool-card { padding: 14px 8px !important; text-align: center; border-radius: 18px !important; }
          .tool-card .tool-icon { width: 52px !important; height: 52px !important; margin: 0 auto 8px auto !important; font-size: 26px !important; border-radius: 15px !important; }
          .tool-card .desktop-only { display: none !important; }
          .tile-name-mobile { display: block; font-size: 12px; font-weight: 500; line-height: 1.25; color: var(--ink); }
          .hero-h1 { font-size: 34px !important; }
          .hero-sub { font-size: 15px !important; }
        }
      `}</style>

      <nav style={{ borderBottom: "1px solid var(--line)", padding: "16px 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, color: "var(--green)" }}>Tooly</div>
          <div style={{ fontSize: 13, color: "var(--muted)" }}>Free · No signup</div>
        </div>
      </nav>

      <section className="wrap hero-fade" style={{ padding: "64px 24px 36px", textAlign: "center" }}>
        <div style={{ fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--green)", fontWeight: 500, marginBottom: 16 }}>
          ✨ 12 free AI tools · no signup
        </div>
        <h1 className="hero-h1" style={{ fontSize: 54, fontWeight: 700, maxWidth: 680, margin: "0 auto 18px" }}>
          Get the writing done in seconds.
        </h1>
        <p className="hero-sub" style={{ fontSize: 18, color: "var(--muted)", maxWidth: 520, margin: "0 auto 32px" }}>
          Cover letters, emails, complaints, and more — pick a tool, paste your details, and copy the result. Free, instant, no account needed.
        </p>

        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you need to write?"
            style={{
              width: "100%", padding: "14px 18px", fontSize: 15, fontFamily: "inherit",
              border: "1px solid var(--line)", borderRadius: 12, background: "#fff", color: "var(--ink)",
            }}
          />
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 16, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
        {categories.map((c) => (
          <span
            key={c}
            className="chip"
            onClick={() => setCat(c)}
            style={{
              fontSize: 13, fontWeight: 500, padding: "7px 16px", borderRadius: 999,
              border: "1px solid " + (cat === c ? "var(--green)" : "var(--line)"),
              background: cat === c ? "var(--green)" : "#fff",
              color: cat === c ? "#fff" : "var(--muted)",
            }}
          >{c}</span>
        ))}
      </section>

      <section className="wrap" style={{ padding: "24px 24px 80px" }}>
        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--muted)", padding: "40px 0" }}>No tools match that — try a different word.</p>
        ) : (
          <div className="tools-grid">
            {filtered.map((t, i) => (
              <Link key={t.name} href={t.href} className="tool-card" style={{
                background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
                padding: "24px", display: "block",
                animationDelay: `${i * 0.04}s`,
                "--accent": t.color, "--glow": t.bg,
              }}>
                <div className="tool-icon" style={{
                  width: 48, height: 48, borderRadius: 12, background: t.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, marginBottom: 16,
                }}>{t.icon}</div>
                <div className="desktop-only" style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 500, background: t.bg, color: t.color, padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5 }}>{t.cat}</span>
                </div>
                <h3 className="desktop-only" style={{ fontSize: 18, fontWeight: 500, marginBottom: 6 }}>{t.name}</h3>
                <p className="desktop-only" style={{ fontSize: 14, color: "var(--muted)", marginBottom: 14 }}>{t.desc}</p>
                <span className="go desktop-only" style={{ fontSize: 14 }}>Open tool →</span>
                <span className="tile-name-mobile">{t.short}</span>
              </Link>
            ))}
          </div>
        )}
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
