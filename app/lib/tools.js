export const TOOLS = {
  "cover-letter": {
    name: "Cover Letter Generator",
    tag: "Job seekers",
    blurb: "Paste the job description and a few notes about yourself. Get a tailored cover letter in seconds.",
    fields: [
      { id: "jobDescription", label: "Job description", placeholder: "Paste the job posting here..." },
      { id: "background", label: "Your background", placeholder: "Your experience, skills, and what makes you a fit..." },
    ],
  },
  "email-rewriter": {
    name: "Email Rewriter",
    tag: "Everyone",
    blurb: "Paste a rough, rushed, or awkward email. Get back a clear, polished, professional version.",
    fields: [
      { id: "email", label: "Your email", placeholder: "Paste the email you want to improve..." },
      { id: "tone", label: "Desired tone (optional)", placeholder: "e.g. friendly, formal, apologetic, firm...", optional: true },
    ],
  },
  "essay-intro": {
    name: "Essay Introduction Writer",
    tag: "Students",
    blurb: "Give your topic and main argument. Get a strong, engaging opening paragraph for your essay.",
    fields: [
      { id: "topic", label: "Essay topic", placeholder: "e.g. The impact of social media on teenage mental health" },
      { id: "thesis", label: "Your thesis / main argument", placeholder: "The main point you're arguing in the essay..." },
    ],
  },
  "youtube-titles": {
    name: "YouTube Title Generator",
    tag: "Creators",
    blurb: "Describe your video. Get 10 click-worthy title options you can use right away.",
    fields: [
      { id: "videoTopic", label: "What's your video about?", placeholder: "Describe the video content, the hook, the audience..." },
    ],
  },
  "cold-email": {
    name: "Cold Email Writer",
    tag: "Marketers",
    blurb: "Tell us who you're reaching out to and why. Get a personalized cold email that doesn't sound like a template.",
    fields: [
      { id: "recipient", label: "Who are you emailing?", placeholder: "Their role, company, and anything you know about them..." },
      { id: "offer", label: "What are you offering or asking for?", placeholder: "Your product, service, or the meeting you want..." },
    ],
  },
  "complaint-letter": {
    name: "Complaint Letter Writer",
    tag: "Everyone",
    blurb: "Describe what went wrong and what you want. Get a firm, clear, effective complaint letter.",
    fields: [
      { id: "situation", label: "What happened?", placeholder: "Describe the problem, dates, product/service, company..." },
      { id: "resolution", label: "What outcome do you want?", placeholder: "e.g. a refund, replacement, apology, repair..." },
    ],
  },
  "resignation-letter": {
    name: "Resignation Letter Generator",
    tag: "Job seekers",
    blurb: "Leaving a job? Get a professional, gracious resignation letter that keeps the door open.",
    fields: [
      { id: "details", label: "Your situation", placeholder: "Your role, company, last day, and how you want to come across (warm, neutral, brief)..." },
      { id: "reason", label: "Reason for leaving (optional)", placeholder: "e.g. new opportunity, relocation, career change — or leave blank to keep it private", optional: true },
    ],
  },
  "out-of-office": {
    name: "Out-of-Office Message Generator",
    tag: "Everyone",
    blurb: "Going away? Get a clear, professional auto-reply that covers the essentials in seconds.",
    fields: [
      { id: "details", label: "The details", placeholder: "Dates you're away, whether you'll check email, who to contact in your absence..." },
      { id: "tone", label: "Tone (optional)", placeholder: "e.g. professional, friendly, brief", optional: true },
    ],
  },
  "freelance-rate": {
    name: "Freelance Rate Helper",
    tag: "Business",
    blurb: "Not sure what to charge? Describe your work and get a reasoned rate range with how to justify it.",
    fields: [
      { id: "work", label: "What do you do?", placeholder: "Your service, experience level, and where you're based..." },
      { id: "context", label: "Project or client context (optional)", placeholder: "e.g. one-off project, ongoing retainer, client budget if known", optional: true },
    ],
  },
  "performance-review": {
    name: "Performance Review Phrase Generator",
    tag: "Business",
    blurb: "Writing a review? Turn rough notes about an employee into clear, constructive review phrases.",
    fields: [
      { id: "notes", label: "Your notes about the person", placeholder: "Strengths, areas to improve, specific examples, their role..." },
      { id: "focus", label: "Focus area (optional)", placeholder: "e.g. communication, leadership, productivity", optional: true },
    ],
  },
};
