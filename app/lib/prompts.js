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

  "resignation-letter": (v) => `You are an expert career writer. Write a professional, gracious resignation letter based on the details below. Keep it brief and positive, express gratitude, and leave the relationship on good terms — never burn bridges.${v.reason ? ` The reason for leaving: ${v.reason}.` : " Do not speculate about or invent a reason for leaving; keep it private and professional."} Include a clear last working day if provided.

DETAILS:
${v.details}

Write only the resignation letter, starting with "Dear [Manager's name],".`,

  "out-of-office": (v) => `You are an expert at professional communication. Write a clear out-of-office auto-reply based on the details below.${v.tone ? ` Use a ${v.tone} tone.` : " Keep it professional and concise."} Cover: that the person is away, the dates if given, whether/when they'll respond, and any alternate contact. Do not add information that isn't provided.

DETAILS:
${v.details}

Write only the out-of-office message.`,

  "freelance-rate": (v) => `You are an experienced freelance business advisor. Based on the work described below, suggest a reasonable rate range (hourly and/or project-based as appropriate) and briefly explain the reasoning. Give the person language they can use to justify and communicate the rate to a client. Be realistic and note that rates vary by market. Do not present a single number as definitive; give a sensible range.

WORK:
${v.work}
${v.context ? `\nCONTEXT:\n${v.context}` : ""}

Provide the rate range and a short, practical explanation.`,

  "performance-review": (v) => `You are an experienced manager and HR writer. Turn the rough notes below into clear, constructive, professional performance-review phrases. Balance genuine strengths with growth areas framed constructively. Group them under simple headings. Keep phrases specific and usable, avoid vague filler, and never be harsh or personal.${v.focus ? ` Pay particular attention to: ${v.focus}.` : ""}

NOTES:
${v.notes}

Provide the review phrases, grouped by theme.`,
};
