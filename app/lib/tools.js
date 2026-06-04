export const TOOLS = {
  "cover-letter": {
    name: "Cover Letter Generator",
    tag: "Job seekers",
    blurb: "Paste the job description and a few notes about yourself. Get a tailored cover letter in seconds.",
    fields: [
      { id: "jobDescription", label: "Job description", placeholder: "Paste the job posting here..." },
      { id: "background", label: "Your background", placeholder: "Your experience, skills, and what makes you a fit..." },
    ],
    buildPrompt: (v) => `You are an expert career writer. Write a professional, tailored cover letter based on the job description and the candidate's background below. Keep it concise (3-4 short paragraphs), warm but professional, and specific to the role. Do not invent facts not present in the background. Do not include placeholder brackets.

JOB DESCRIPTION:
${v.jobDescription}

CANDIDATE BACKGROUND:
${v.background}

Write only the cover letter, starting with "Dear Hiring Manager,".`,
  },

  "email-rewriter": {
    name: "Email Rewriter",
    tag: "Everyone",
    blurb: "Paste a rough, rushed, or awkward email. Get back a clear, polished, professional version.",
    fields: [
      { id: "email", label: "Your email", placeholder: "Paste the email you want to improve..." },
      { id: "tone", label: "Desired tone (optional)", placeholder: "e.g. friendly, formal, apologetic, firm...", optional: true },
    ],
    buildPrompt: (v) => `You are an expert business writing editor. Rewrite the email below to be clear, professional, and well-structured while preserving the original meaning and intent. Fix grammar, tighten wording, and improve flow.${v.tone ? ` Aim for a ${v.tone} tone.` : ""} Do not add information that isn't there. Keep it natural, not stiff.

ORIGINAL EMAIL:
${v.email}

Write only the rewritten email.`,
  },

  "essay-intro": {
    name: "Essay Introduction Writer",
    tag: "Students",
    blurb: "Give your topic and main argument. Get a strong, engaging opening paragraph for your essay.",
    fields: [
      { id: "topic", label: "Essay topic", placeholder: "e.g. The impact of social media on teenage mental health" },
      { id: "thesis", label: "Your thesis / main argument", placeholder: "The main point you're arguing in the essay..." },
    ],
    buildPrompt: (v) => `You are a skilled academic writing tutor. Write a single strong introductory paragraph for a student essay on the topic and thesis below. Open with an engaging hook, give brief context, and end with a clear thesis statement. Keep it appropriate for a high-school or undergraduate essay. Write in the student's own plausible voice — do not be overly flowery.

TOPIC:
${v.topic}

THESIS / MAIN ARGUMENT:
${v.thesis}

Write only the introduction paragraph.`,
  },

  "youtube-titles": {
    name: "YouTube Title Generator",
    tag: "Creators",
    blurb: "Describe your video. Get 10 click-worthy title options you can use right away.",
    fields: [
      { id: "videoTopic", label: "What's your video about?", placeholder: "Describe the video content, the hook, the audience..." },
    ],
    buildPrompt: (v) => `You are a YouTube growth expert who writes high-performing video titles. Based on the video description below, generate 10 distinct, compelling title options. Mix styles: some curiosity-driven, some benefit-driven, some list/number based. Keep each under 70 characters. Avoid clickbait that misleads. Number them 1-10.

VIDEO DESCRIPTION:
${v.videoTopic}

Write only the numbered list of 10 titles.`,
  },

  "cold-email": {
    name: "Cold Email Writer",
    tag: "Marketers",
    blurb: "Tell us who you're reaching out to and why. Get a personalized cold email that doesn't sound like a template.",
    fields: [
      { id: "recipient", label: "Who are you emailing?", placeholder: "Their role, company, and anything you know about them..." },
      { id: "offer", label: "What are you offering or asking for?", placeholder: "Your product, service, or the meeting you want..." },
    ],
    buildPrompt: (v) => `You are an expert at writing cold outreach emails that get replies. Write a short, personalized cold email based on the details below. Keep it under 120 words. Lead with relevance to the recipient, make one clear ask, and sound human — not like a sales template. Include a brief, specific subject line on the first line prefixed with "Subject: ".

RECIPIENT:
${v.recipient}

OFFER / ASK:
${v.offer}

Write only the subject line and email body.`,
  },

  "complaint-letter": {
    name: "Complaint Letter Writer",
    tag: "Everyone",
    blurb: "Describe what went wrong and what you want. Get a firm, clear, effective complaint letter.",
    fields: [
      { id: "situation", label: "What happened?", placeholder: "Describe the problem, dates, product/service, company..." },
      { id: "resolution", label: "What outcome do you want?", placeholder: "e.g. a refund, replacement, apology, repair..." },
    ],
    buildPrompt: (v) => `You are an expert consumer-rights writer. Write a firm but professional complaint letter based on the details below. Be clear about the problem, factual, and assertive without being aggressive. State the specific resolution requested and a reasonable timeframe. Keep it concise.

WHAT HAPPENED:
${v.situation}

DESIRED RESOLUTION:
${v.resolution}

Write only the complaint letter, starting with "Dear Sir or Madam,".`,
  },
};
