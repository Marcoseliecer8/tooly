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
};
