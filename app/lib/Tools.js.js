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
    seo: {
      sections: [
        {
          heading: "Turn a rough email into a clear, professional one",
          paragraphs: [
            "Most of us write emails in a hurry, and it shows — run-on sentences, an unclear ask, or a tone that comes across colder or more anxious than we meant. The cost is real: a confusing email gets ignored or misread, and you end up sending three more to clean it up.",
            "This free email rewriter takes whatever you've drafted and returns a clearer, more polished version that keeps your original meaning intact. It fixes grammar, tightens the wording, and improves the flow without inventing anything you didn't say. If you want a particular tone — friendly, formal, apologetic, firm — you can ask for it.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "Paste your draft email into the first box exactly as you wrote it, typos and all. If you have a tone in mind, add it in the optional second box — otherwise the rewrite stays professional and neutral.",
            "Generate, read the result, and check that it still says what you meant. Because the tool only works from what you give it, the more context your draft includes, the better the rewrite. Copy it across to your email client when you're happy.",
          ],
        },
      ],
      faq: [
        { q: "Is the email rewriter free?", a: "Yes, it's completely free with no sign-up. Paste your email, choose a tone if you like, and get a rewritten version instantly." },
        { q: "Will it change what my email means?", a: "No. The rewriter preserves your original intent and only improves clarity, grammar, and flow. It won't add facts or claims you didn't include." },
        { q: "Can I choose the tone?", a: "Yes. Use the optional tone field to ask for friendly, formal, apologetic, firm, or any other style. Leave it blank for a clean professional default." },
        { q: "Is it good for work emails?", a: "Especially so. It's designed for everyday professional emails — requests, replies, follow-ups, and the occasional message you want to get exactly right." },
      ],
    },
  },
  "essay-intro": {
    name: "Essay Introduction Writer",
    tag: "Students",
    blurb: "Give your topic and main argument. Get a strong, engaging opening paragraph for your essay.",
    fields: [
      { id: "topic", label: "Essay topic", placeholder: "e.g. The impact of social media on teenage mental health" },
      { id: "thesis", label: "Your thesis / main argument", placeholder: "The main point you're arguing in the essay..." },
    ],
    seo: {
      sections: [
        {
          heading: "Get past the blank page with a strong essay introduction",
          paragraphs: [
            "The hardest part of any essay is the first paragraph. You know roughly what you want to argue, but turning that into an opening that hooks the reader and sets up your thesis can eat an hour before you've written a word of the actual essay.",
            "This free essay introduction writer gives you a solid first draft to react to. You provide the topic and your main argument, and it writes an opening paragraph with a hook, a little context, and a clear thesis statement — appropriate for a high-school or undergraduate essay. It's a starting point to refine in your own voice, not a finished essay to hand in as-is.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "Enter your essay topic in the first box — the more specific, the better. In the second box, write your thesis or the main point you intend to argue. You don't need perfect phrasing; a rough sentence is enough for the tool to work with.",
            "Generate the introduction, then make it yours: adjust the hook, tweak the wording, and make sure the thesis matches exactly what the rest of your essay will argue. Use it to break the inertia, then write the body in your own words.",
          ],
        },
      ],
      faq: [
        { q: "Is this essay intro tool free?", a: "Yes, it's free to use with no account needed. Enter your topic and thesis and get an opening paragraph in seconds." },
        { q: "Is using this considered cheating?", a: "Treat it as a brainstorming and drafting aid, like an outline or a writing tutor's suggestion. Always write your essay in your own words and follow your school's academic honesty policy." },
        { q: "What should my thesis look like?", a: "A thesis is the single main claim your essay defends. Even a rough version works — the tool will shape it into a clearer statement you can refine." },
        { q: "Will it write my whole essay?", a: "No. This tool focuses on the introduction only, to help you get started. The body and conclusion are yours to write." },
      ],
    },
  },
  "youtube-titles": {
    name: "YouTube Title Generator",
    tag: "Creators",
    blurb: "Describe your video. Get 10 click-worthy title options you can use right away.",
    fields: [
      { id: "videoTopic", label: "What's your video about?", placeholder: "Describe the video content, the hook, the audience..." },
    ],
    seo: {
      sections: [
        {
          heading: "Find a YouTube title that earns the click",
          paragraphs: [
            "Your title and thumbnail decide whether anyone watches. You can pour hours into editing a great video and still get buried because the title was flat. But staring at a blinking cursor trying to invent the perfect headline is its own kind of creative block.",
            "This free YouTube title generator gives you ten different options from a single description of your video. It mixes approaches — curiosity-driven, benefit-driven, and list or number styles — so you can compare angles and pick the one that fits your channel. Every option is kept to a sensible length so it won't get cut off in search results.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "Describe your video in the box: what it's about, the hook or payoff, and who it's for. The more you include about what makes the video interesting, the sharper the titles.",
            "Generate ten options, then shortlist the two or three that feel both honest and compelling. Avoid titles that overpromise — a misleading title might win the click but loses the viewer, which hurts your channel over time. Pick the one that accurately reflects the best part of your video.",
          ],
        },
      ],
      faq: [
        { q: "Is the YouTube title generator free?", a: "Yes, completely free and no sign-up. Describe your video and get ten title ideas instantly." },
        { q: "How long should a YouTube title be?", a: "Keep titles to roughly 60 to 70 characters so they aren't truncated in search and suggested videos. The generator aims for this range automatically." },
        { q: "Will these titles work for any niche?", a: "Yes. Because the titles are generated from your specific description, they adapt to gaming, tutorials, vlogs, education, or any other niche." },
        { q: "Should I use clickbait?", a: "Aim for compelling but honest. A title that accurately reflects your best moment keeps viewers watching, which matters more to the algorithm than the initial click." },
      ],
    },
  },
  "cold-email": {
    name: "Cold Email Writer",
    tag: "Marketers",
    blurb: "Tell us who you're reaching out to and why. Get a personalized cold email that doesn't sound like a template.",
    fields: [
      { id: "recipient", label: "Who are you emailing?", placeholder: "Their role, company, and anything you know about them..." },
      { id: "offer", label: "What are you offering or asking for?", placeholder: "Your product, service, or the meeting you want..." },
    ],
    seo: {
      sections: [
        {
          heading: "Write a cold email people actually reply to",
          paragraphs: [
            "Cold emails fail for predictable reasons: they're all about the sender, they bury the ask, and they read like a template blasted to a thousand people. A good cold email does the opposite — it leads with something relevant to the recipient, makes one clear ask, and respects their time by being short.",
            "This free cold email writer builds a personalized message from the details you provide about who you're contacting and what you want. It keeps the email tight, leads with relevance, and includes a specific subject line — so it sounds like a real person reached out, not a mail merge.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, describe the recipient: their role, company, and anything you know about them or their situation. The more specific you are, the more genuinely personalized the email will feel. In the second box, state plainly what you're offering or asking for.",
            "Generate the email, then personalize it further with a real detail — a recent post, a mutual connection, something specific to their work. That single human touch is what separates a reply from a delete. Keep your ask clear and easy to say yes to.",
          ],
        },
      ],
      faq: [
        { q: "Is the cold email writer free?", a: "Yes, it's free with no account required. Describe your recipient and your ask, and get a ready-to-send draft." },
        { q: "How long should a cold email be?", a: "Short — usually under 120 words. Busy people skim, so a focused email with one clear ask outperforms a long pitch." },
        { q: "Will it include a subject line?", a: "Yes. The tool generates a brief, specific subject line along with the body, since the subject is what determines whether your email gets opened." },
        { q: "How do I avoid sounding like spam?", a: "Add a genuine, specific detail about the recipient and make a single clear ask. The generator gives you a strong base; the personal touch makes it land." },
      ],
    },
  },
  "complaint-letter": {
    name: "Complaint Letter Writer",
    tag: "Everyone",
    blurb: "Describe what went wrong and what you want. Get a firm, clear, effective complaint letter.",
    fields: [
      { id: "situation", label: "What happened?", placeholder: "Describe the problem, dates, product/service, company..." },
      { id: "resolution", label: "What outcome do you want?", placeholder: "e.g. a refund, replacement, apology, repair..." },
    ],
    seo: {
      sections: [
        {
          heading: "Write a complaint letter that gets results",
          paragraphs: [
            "When a product fails or a service lets you down, a well-written complaint letter is often the fastest route to a refund, replacement, or apology. The key is tone: too angry and it gets dismissed, too timid and it gets ignored. The effective middle ground is firm, factual, and clear about exactly what you want.",
            "This free complaint letter writer strikes that balance for you. You describe what went wrong and the outcome you're after, and it produces a professional letter that states the problem plainly, stays assertive without being aggressive, and asks for a specific resolution within a reasonable timeframe.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, lay out what happened: the product or service, relevant dates, the company, and the specifics of the problem. Facts matter here — they make your letter credible. In the second box, state the resolution you want, whether that's a refund, a replacement, a repair, or an apology.",
            "Generate the letter and review it for accuracy. Add any reference numbers, order IDs, or dates you have, since those strengthen your case. Then send it to the company through their official complaints channel.",
          ],
        },
      ],
      faq: [
        { q: "Is the complaint letter writer free?", a: "Yes, free and no sign-up. Describe the issue and the outcome you want, and get a complete letter you can send." },
        { q: "How formal should a complaint letter be?", a: "Professional and firm, but not hostile. A calm, factual letter that clearly states your desired resolution is taken more seriously than an angry one." },
        { q: "What details should I include?", a: "Include dates, order or reference numbers, the product or service involved, and exactly what went wrong. Specific facts make your complaint harder to dismiss." },
        { q: "Can I use it for any company?", a: "Yes. The letter is general enough to send to retailers, service providers, landlords, or any organization, and you can edit in the specific contact details." },
      ],
    },
  },
  "resignation-letter": {
    name: "Resignation Letter Generator",
    tag: "Job seekers",
    blurb: "Leaving a job? Get a professional, gracious resignation letter that keeps the door open.",
    fields: [
      { id: "details", label: "Your situation", placeholder: "Your role, company, last day, and how you want to come across (warm, neutral, brief)..." },
      { id: "reason", label: "Reason for leaving (optional)", placeholder: "e.g. new opportunity, relocation, career change — or leave blank to keep it private", optional: true },
    ],
    seo: {
      sections: [
        {
          heading: "Resign professionally without burning bridges",
          paragraphs: [
            "Handing in your notice is a moment worth getting right. The industry you work in is often smaller than it feels, and a gracious resignation letter protects your reputation, keeps references intact, and leaves the door open for the future. The goal is brief, warm, and professional — not a place to air grievances.",
            "This free resignation letter generator writes exactly that kind of letter. You give it the basics of your situation, and it produces a short, positive note that expresses gratitude, states your last day, and leaves on good terms. You can keep your reason for leaving private or include it — your choice.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, include your role, your company, your intended last working day, and the tone you want to strike — warm, neutral, or brief. In the optional second box, you can add a reason for leaving, or leave it blank to keep it private and professional.",
            "Generate the letter, then add your manager's name and any personal thanks you'd like to include. Even when you're leaving on difficult terms, a polished, gracious letter is almost always the smarter long-term move.",
          ],
        },
      ],
      faq: [
        { q: "Is the resignation letter generator free?", a: "Yes, it's free with no account required. Provide your details and get a professional letter in seconds." },
        { q: "Do I need to give a reason for leaving?", a: "No. You're not obligated to state why you're leaving. The tool keeps it private by default, or you can include a brief reason if you prefer." },
        { q: "How much notice should I give?", a: "Two weeks is the common standard in many roles, but check your contract — some positions require more. State your last working day clearly in the letter." },
        { q: "Should I keep it positive even if I had a bad experience?", a: "Generally yes. A gracious letter protects your references and reputation. Save any constructive feedback for an exit interview rather than the letter itself." },
      ],
    },
  },
  "out-of-office": {
    name: "Out-of-Office Message Generator",
    tag: "Everyone",
    blurb: "Going away? Get a clear, professional auto-reply that covers the essentials in seconds.",
    fields: [
      { id: "details", label: "The details", placeholder: "Dates you're away, whether you'll check email, who to contact in your absence..." },
      { id: "tone", label: "Tone (optional)", placeholder: "e.g. professional, friendly, brief", optional: true },
    ],
    seo: {
      sections: [
        {
          heading: "Set up an out-of-office reply that covers everything",
          paragraphs: [
            "A good out-of-office message does more than say you're away. It tells people when you'll be back, whether you'll be checking messages, and who to contact if something is urgent — so nothing stalls while you're gone and you don't return to a pile of confusion.",
            "This free out-of-office generator writes a clear, professional auto-reply from a few quick details. Whether you want it strictly professional, warm and friendly, or as brief as possible, it covers the essentials without rambling, so you can set it and switch off with peace of mind.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, include the dates you'll be away, whether you'll have any access to email, and who should be contacted in your absence (with their details if you want them included). In the optional tone box, note if you'd like it friendly, formal, or brief.",
            "Generate the message and paste it into your email client's automatic-reply settings. Double-check the dates and the alternate contact before you enable it — those are the two things people actually need from an out-of-office reply.",
          ],
        },
      ],
      faq: [
        { q: "Is the out-of-office generator free?", a: "Yes, free and no sign-up. Enter your dates and details and get a ready-to-use auto-reply." },
        { q: "What should an out-of-office message include?", a: "The dates you're away, whether you'll respond during that time, and an alternate contact for urgent matters. Keeping these clear prevents follow-up confusion." },
        { q: "Can I make it sound friendly or formal?", a: "Yes. Use the optional tone field to choose professional, friendly, or brief, and the message adapts accordingly." },
        { q: "Where do I put the message?", a: "Paste it into your email program's automatic-reply or vacation-responder settings — most email services have this under settings, with start and end dates." },
      ],
    },
  },
  "freelance-rate": {
    name: "Freelance Rate Helper",
    tag: "Business",
    blurb: "Not sure what to charge? Describe your work and get a reasoned rate range with how to justify it.",
    fields: [
      { id: "work", label: "What do you do?", placeholder: "Your service, experience level, and where you're based..." },
      { id: "context", label: "Project or client context (optional)", placeholder: "e.g. one-off project, ongoing retainer, client budget if known", optional: true },
    ],
    seo: {
      sections: [
        {
          heading: "Figure out what to charge as a freelancer",
          paragraphs: [
            "Pricing is the part of freelancing that keeps people up at night. Charge too little and you resent the work; quote too high without a reason and you lose the client. Most freelancers guess, second-guess, and undercharge — usually because they have no clear framework for what their work is worth.",
            "This free freelance rate helper gives you a reasoned starting point. You describe your work, experience, and where you're based, and it suggests a sensible rate range along with the reasoning behind it — plus language you can actually use to present and justify the number to a client with confidence.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, describe what you do, your experience level, and your location, since rates vary a lot by market. In the optional second box, add context about the specific project — whether it's a one-off, an ongoing retainer, or whether you know the client's budget.",
            "Generate your rate guidance and use it as a reference point, not gospel. Rates depend on your market, your niche, and the value you deliver. The real benefit is the framework and the language for explaining your price — confidence in the conversation often matters as much as the number.",
          ],
        },
      ],
      faq: [
        { q: "Is the freelance rate helper free?", a: "Yes, free with no sign-up. Describe your work and get a suggested rate range and reasoning." },
        { q: "Is this financial advice?", a: "No. It offers a general reasoned starting point based on what you describe. Your actual rate depends on your market, niche, and the value you provide." },
        { q: "Should I charge hourly or per project?", a: "It depends on the work. The tool suggests both where appropriate — project pricing often suits defined deliverables, while hourly fits open-ended or ongoing work." },
        { q: "How do I justify my rate to a client?", a: "The tool gives you language tying your rate to your experience and the value delivered. Leading with the outcome you provide, rather than just the hours, makes the number easier to accept." },
      ],
    },
  },
  "performance-review": {
    name: "Performance Review Phrase Generator",
    tag: "Business",
    blurb: "Writing a review? Turn rough notes about an employee into clear, constructive review phrases.",
    fields: [
      { id: "notes", label: "Your notes about the person", placeholder: "Strengths, areas to improve, specific examples, their role..." },
      { id: "focus", label: "Focus area (optional)", placeholder: "e.g. communication, leadership, productivity", optional: true },
    ],
    seo: {
      sections: [
        {
          heading: "Write performance reviews that are clear and constructive",
          paragraphs: [
            "Performance reviews are one of the tasks managers dread most. You know what you want to say about someone's work, but turning rough impressions into phrasing that's specific, fair, and constructive — without sounding harsh or vague — is genuinely hard, especially across a whole team at review time.",
            "This free performance review phrase generator turns your notes into usable language. You jot down strengths, areas to improve, and examples, and it produces clear, professional phrases grouped by theme — balancing genuine praise with growth areas framed constructively, so feedback lands as helpful rather than critical.",
          ],
        },
        {
          heading: "How to use it",
          paragraphs: [
            "In the first box, write your honest notes about the person: their strengths, where they could grow, specific examples, and their role. In the optional second box, name a focus area like communication, leadership, or productivity if you want the phrases to concentrate there.",
            "Generate the phrases and adapt them to the individual — the best feedback is specific. Replace general statements with concrete examples from real work, and make sure praise and growth areas both feel honest. Use it as a drafting aid, not a substitute for your own judgment about the person.",
          ],
        },
      ],
      faq: [
        { q: "Is the performance review generator free?", a: "Yes, free and no account needed. Enter your notes and get constructive review phrases in seconds." },
        { q: "How do I give constructive criticism?", a: "Pair each growth area with a specific example and a path forward, and balance it with genuine strengths. The tool frames feedback this way so it reads as supportive." },
        { q: "Can I use these phrases word-for-word?", a: "Use them as a strong starting point, but personalize them with real examples from the employee's work. Specific, individualized feedback is far more useful than generic phrasing." },
        { q: "Does it work for self-evaluations too?", a: "Yes. You can describe your own work in the notes field to generate clear, professional phrases for a self-assessment." },
      ],
    },
  },
};
