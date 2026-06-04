export const TOOLS = {
  "cover-letter": {
    name: "Cover Letter Generator",
    tag: "Job seekers",
    blurb: "Paste the job description and a few notes about yourself. Get a tailored cover letter in seconds.",
    fields: [
      { id: "jobDescription", label: "Job description", placeholder: "Paste the job posting here..." },
      { id: "background", label: "Your background", placeholder: "Your experience, skills, and what makes you a fit..." },
    ],
    seo: {
      sections: [
        {
          heading: "Write a cover letter that actually gets read",
          paragraphs: [
            "A strong cover letter does something a resume can't: it connects your specific experience to the specific role in plain, human language. Hiring managers read dozens of generic letters that could have been sent to any company. The ones that stand out show that the applicant actually read the job description and understood what the team needs.",
            "This free cover letter generator helps you do exactly that. You paste in the job description and a few honest notes about your background, and it writes a tailored draft that speaks to that role in particular — no filler, no placeholder brackets, no generic template language. You stay in control: treat the result as a strong first draft you can edit to sound more like you.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "Start by pasting the full job posting into the first box. The more detail it has — responsibilities, required skills, the company's tone — the more specific your letter can be. Then in the second box, write a few lines about your relevant experience: your current or most recent role, a couple of concrete accomplishments, and any skills that match what the posting asks for.",
            "Click generate, and you'll get a complete cover letter in seconds. Read it through, swap in any specifics it couldn't know, and adjust the tone if you want it warmer or more formal. A good cover letter is short — three or four tight paragraphs — so resist the urge to pad it.",
          ],
        },
      ],
      faq: [
        { q: "Is this cover letter generator free?", a: "Yes. You can generate cover letters for free, with no account or sign-up required. Paste your details, generate, and copy the result." },
        { q: "Will employers know it was AI-assisted?", a: "The draft is written to sound natural and human, but you should always personalize it. Add specific details about the company and your experience that only you would know — that's what makes a letter genuinely yours and impossible to mistake for a template." },
        { q: "How long should a cover letter be?", a: "Aim for three to four short paragraphs on a single page. Hiring managers skim, so a concise, focused letter that connects your experience to the role beats a long one every time." },
        { q: "Do I still need a resume?", a: "Yes. A cover letter complements your resume rather than replacing it. The letter explains why you're a fit for this specific role; the resume provides the full record of your experience." },
    ],
    },
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
