"use client";

import { useState } from "react";
import Link from "next/link";

export default function ToolRunner({ toolId, tool }) {
  const [values, setValues] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function setField(id, val) {
    setValues((prev) => ({ ...prev, [id]: val }));
  }

  async function handleGenerate() {
    setError("");
    setResult("");
    const missing = tool.fields.filter((f) => !f.optional && !values[f.id]?.trim());
    if (missing.length) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toolId, values }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data.result);
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const inputStyle = {
    width: "100%", padding: "12px 14px", fontSize: 15, fontFamily: "inherit",
    border: "1px solid var(--line)", borderRadius: 10, resize: "vertical",
    background: "#fff", color: "var(--ink)", lineHeight: 1.5,
  };

  return (
    <main>
      <nav style={{ borderBottom: "1px solid var(--line)", padding: "16px 0" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 24, color: "var(--green)" }}>Tooly</Link>
          <Link href="/" style={{ fontSize: 14, color: "var(--muted)" }}>← All tools</Link>
        </div>
      </nav>

      <div className="wrap" style={{ padding: "48px 24px 80px", maxWidth: 720 }}>
        <span style={{ fontSize: 11, fontWeight: 500, background: "var(--surface)", color: "var(--green-dark)", padding: "3px 10px", borderRadius: 6 }}>{tool.tag}</span>
        <h1 style={{ fontSize: 40, fontWeight: 700, margin: "16px 0 10px" }}>{tool.name}</h1>
        <p style={{ fontSize: 17, color: "var(--muted)", marginBottom: 32 }}>{tool.blurb}</p>

        {tool.fields.map((f) => (
          <div key={f.id}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{f.label}</label>
            <textarea
              style={{ ...inputStyle, minHeight: f.optional ? 56 : 120, marginBottom: 20 }}
              value={values[f.id] || ""}
              onChange={(e) => setField(f.id, e.target.value)}
              placeholder={f.placeholder}
            />
          </div>
        ))}

        <button onClick={handleGenerate} disabled={loading} style={{
          background: "var(--green)", color: "#fff", border: "none", borderRadius: 10,
          padding: "13px 28px", fontSize: 16, fontWeight: 500, cursor: loading ? "default" : "pointer",
          opacity: loading ? 0.7 : 1, fontFamily: "inherit",
        }}>
          {loading ? "Working..." : "Generate"}
        </button>

        {error && <p style={{ color: "#C0392B", marginTop: 16, fontSize: 14 }}>{error}</p>}

        {result && (
          <div style={{ marginTop: 36, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, padding: "28px 30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 500 }}>Result</h3>
              <button onClick={copyResult} style={{ background: "var(--surface)", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "var(--green-dark)", fontFamily: "inherit" }}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div style={{ whiteSpace: "pre-wrap", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" }}>{result}</div>
          </div>
        )}

        {tool.seo && (
          <article style={{ marginTop: 64, borderTop: "1px solid var(--line)", paddingTop: 40 }}>
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
        )}
      </div>
    </main>
  );
}
