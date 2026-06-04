
const BASE = "https://usetooly.io";

const tools = [
  "cover-letter",
  "email-rewriter",
  "essay-intro",
  "youtube-titles",
  "cold-email",
  "complaint-letter",
  "resignation-letter",
  "out-of-office",
  "freelance-rate",
  "performance-review",
];

export default function sitemap() {
  const now = new Date();
  const home = {
    url: BASE,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };
  const toolPages = tools.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [home, ...toolPages];
}
