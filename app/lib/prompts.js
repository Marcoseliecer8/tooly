export const PROMPTS = {
  "cover-letter": (v) => `You are an expert career writer. Write a professional, tailored cover letter based on the job description and the candidate's background below. Keep it concise (3-4 short paragraphs), warm but professional, and specific to the role. Do not invent facts not present in the background. Do not include placeholder brackets.

JOB DESCRIPTION:
${v.jobDescription}

CANDIDATE BACKGROUND:
${v.background}

Write only the cover letter, starting with "Dear Hiring Manager,".`,

  "email-rewriter": (v) => `You are an expert business writing editor. Rewrite the email below to be clear, professional, and well-structured while preserving the original meaning and intent. Fix grammar, tighten wording, and improve flow.${v.tone ? ` Aim for a ${v.tone} tone.` : ""} Do not add information that isn't there. Keep it natural, not stiff.

ORIGINAL EMAIL:
${v.email}

Write only the rewritten email.`,

  "essay-intro": (v) => `You are a skilled academic writing tutor. Write a single strong introductory paragraph for a student essay on the topic and thesis below. Open with an engaging hook, give brief context, and end with a clear thesis statement. Keep it appropriate for a high-school or undergraduate essay. Write in the student's own plausible voice — do not be overly flowery.

TOPIC:
${v.topic}

THESIS / MAIN ARGUMENT:
${v.thesis}

Write only the introduction paragraph.`,

  "youtube-titles": (v) => `You are a YouTube growth expert who writes high-performing video titles. Based on the video description below, generate 10 distinct, compelling title options. Mix styles: some curiosity-driven, some benefit-driven, some list/number based. Keep each under 70 characters. Avoid clickbait that misleads. Number them 1-10.

VIDEO DESCRIPTION:
${v.videoTopic}

Write only the numbered list of 10 titles.`,

  "cold-email": (v) => `You are an expert at writing cold outreach emails that get replies. Write a short, personalized cold email based on the details below. Keep it under 120 words. Lead with relevance to the recipient, make one clear ask, and sound human — not like a sales template. Include a brief, specific subject line on the first line prefixed with "Subject: ".

RECIPIENT:
${v.recipient}

OFFER / ASK:
${v.offer}

Write only the subject line and email body.`,

  "complaint-letter": (v) => `You are an expert consumer-rights writer. Write a firm but professional complaint letter based on the details below. Be clear about the problem, factual, and assertive without being aggressive. State the specific resolution requested and a reasonable timeframe. Keep it concise.

WHAT HAPPENED:
${v.situation}

DESIRED RESOLUTION:
${v.resolution}

Write only the complaint letter, starting with "Dear Sir or Madam,".`,
};
