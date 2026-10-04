export type Point = { title: string; body: string };

export type Service = {
  eyebrow: string;
  title: string;
  lede: string[];
  points?: Point[];
  closing?: string;
  image: string;
  alt: string;
};

export const about: Service = {
  eyebrow: "About",
  title: "Crafting futures, cultivating excellence",
  image: "/images/eduvista-about.jpg",
  alt: "Young green shoots rising from dark soil at dawn.",
  lede: [
    "A global academic and career hub: data-driven, integrity-rooted work so every learner thrives.",
  ],
};

export const statements = [
  {
    title: "Mission",
    body: "To deliver data-driven academic and career solutions that inspire success, ensure timely graduation, and unlock global opportunities.",
  },
  {
    title: "Vision",
    body: "To be the leading global force in academic and career empowerment through excellence, innovation, and lifelong impact.",
  },
  {
    title: "Approach",
    body: "We offer tailored, data-informed solutions driven by integrity, innovation, and a commitment to global excellence — ensuring every learner thrives and every outcome counts.",
  },
];

export const crafting =
  "We cultivate futures through mentorship, research, and global opportunity. Excellence is a practice, not a destination.";

export const commitments = [
  {
    lead: "Empowering",
    rest: "academic paths, with globally informed advice from pre-university to postgraduate study.",
  },
  {
    lead: "Elevating",
    rest: "postgraduate research so it informs scholarship, policy, and practice.",
  },
  {
    lead: "Equipping",
    rest: "professionals with certifications and readiness for careers across continents.",
  },
];

export const aboutClosing =
  "Every learner we guide, every discovery we mentor, and every professional we empower shapes that future.";

export const learners: Service[] = [
  {
    eyebrow: "Academic pathway",
    title: "Advisory and excellence support",
    image: "/images/eduvista-pathway.jpg",
    alt: "A brass compass and a closed notebook on a wooden desk at dusk.",
    lede: [
      "Guidance from first university choice through postgraduate placement, so students choose well and complete well.",
    ],
    points: [
      {
        title: "Pre-university navigation",
        body: "Best-fit universities and programmes based on strengths, aspirations, and future relevance.",
      },
      {
        title: "Undergraduate advisory",
        body: "Benchmarking, course choices, progression, and degree completion.",
      },
      {
        title: "Postgraduate placement",
        body: "Master’s and PhD programmes that match research and career ambitions.",
      },
      {
        title: "Scholarships and aid",
        body: "Mentorship for competitive local and international funding.",
      },
    ],
  },
  {
    eyebrow: "STEM",
    title: "Academic mastery tutorials",
    image: "/images/eduvista-stem.jpg",
    alt: "Pencils, a glass sphere, and a planted beaker on a quiet study table.",
    lede: [
      "STEM tutorials that close gaps, build confidence, and keep students on track.",
    ],
    points: [
      {
        title: "Subject mastery",
        body: "Physics, Chemistry, Biology, Mathematics, Engineering, and Environmental Science.",
      },
      {
        title: "Applied sessions",
        body: "Live problem-solving with tools and simulations, so concepts stick.",
      },
      {
        title: "Progress and recovery",
        body: "Study plans, performance checks, and graduation recovery where needed.",
      },
    ],
  },
  {
    eyebrow: "Research",
    title: "Postgraduate research excellence",
    image: "/images/eduvista-research.jpg",
    alt: "An open manuscript with a fountain pen in warm lamplight.",
    lede: [
      "Mentorship for master’s and doctoral candidates, from coursework through publication.",
    ],
    points: [
      {
        title: "Coursework and writing",
        body: "Advanced academic writing, referencing, and exam readiness.",
      },
      {
        title: "Proposal and thesis",
        body: "Topic, proposal, analysis (SPSS, R, Python, NVivo), and thesis structure.",
      },
      {
        title: "Publishing",
        body: "Manuscripts, journal submission, and scholarly communication.",
      },
      {
        title: "Researcher practice",
        body: "Ethics, presentation, and collaboration networks.",
      },
    ],
  },
  {
    eyebrow: "Coaching",
    title: "Academic coaching",
    image: "/images/eduvista-coaching.jpg",
    alt: "Two people seated in a library, seen from behind, facing a bright window.",
    lede: [
      "Personal coaching so students set goals, study well, and work through what stalls progress.",
    ],
    points: [
      {
        title: "Academic goals",
        body: "Goals that match long-term study and career paths.",
      },
      {
        title: "Study strategies",
        body: "Methods from cognitive science and active learning.",
      },
      {
        title: "Barriers",
        body: "Support for anxiety, procrastination, and burnout.",
      },
      {
        title: "Independent learning",
        body: "Reflection, self-direction, and adaptive problem-solving.",
      },
      {
        title: "Progress plans",
        body: "Feedback, tracking, and tailored interventions.",
      },
    ],
  },
  {
    eyebrow: "Careers",
    title: "Career preparedness",
    image: "/images/eduvista-career.jpg",
    alt: "Two empty oak chairs in a calm interview room with warm window light.",
    lede: [
      "Employability skills and placement support for local and international roles.",
    ],
    points: [
      {
        title: "CVs and interviews",
        body: "CVs and cover letters for specific markets, plus mock interviews.",
      },
      {
        title: "Internships and attachments",
        body: "Placements in Africa, Europe, North America, and Asia.",
      },
      {
        title: "Visa-sponsored jobs",
        body: "Applications, documentation, employer targeting, and relocation planning.",
      },
    ],
  },
];

export const certification = {
  eyebrow: "Credentials",
  title: "Professional certification",
  lede: [
    "High-impact certifications matched to career goals, with support through enrolment and preparation.",
  ],
  rows: [
    ["Project management", "PMP, PRINCE2"],
    ["Data science and analytics", "Python, R, Power BI"],
    ["Finance and accounting", "CPA, ACCA, CFA"],
    ["Public health", "CHES, MPH"],
    ["Research and evaluation", "M&E, SPSS, NVivo"],
    ["Engineering and design", "PE certification, AutoCAD"],
    ["Software development", "Full stack, mobile app development"],
    ["Digital marketing", "SEO, Google Ads, HubSpot"],
    ["Instructional technology", "Google Certified Educator"],
  ],
};

export const vision: Service = {
  eyebrow: "Institutions",
  title: "Vision through data",
  image: "/images/eduvista-institutions.jpg",
  alt: "A stone university colonnade and ivy at dusk.",
  lede: [
    "Research consultancy, polling, and market intelligence so institutions lead with evidence, not guesswork.",
  ],
};

export const consultancy: Service = {
  eyebrow: "Evidence",
  title: "Research consultancy",
  image: "/images/eduvista-field.jpg",
  alt: "Blank clipboards and a brass survey marker on an outdoor table at dusk.",
  lede: [
    "Programme audits, policy studies, and MEL systems for universities, government, and donor-funded work.",
  ],
  points: [
    {
      title: "Programme evaluation and audits",
      body: "University, TVET, and college reviews against accreditation and improvement frameworks.",
    },
    {
      title: "Policy and sector studies",
      body: "Education, health, and governance research, from baseline to post-policy review.",
    },
    {
      title: "Institution-focused theses",
      body: "Master’s and PhD research on reform, including instruments, analysis, and publication.",
    },
    {
      title: "MEL systems",
      body: "Frameworks and surveys for NGOs, government, and donor programmes.",
    },
  ],
};

export const polls = {
  eyebrow: "Public voice",
  title: "Polls and public engagement",
  lede: [
    "Ethical, statistically robust surveys for political strategy, civic engagement, and service delivery.",
  ],
  points: [
    {
      title: "Political sentiment",
      body: "Constituency and issue polls, voter mapping, and campaign diagnostics.",
    },
    {
      title: "Civic attitude surveys",
      body: "Public views on governance, service delivery, and confidence.",
    },
    {
      title: "Stakeholder feedback",
      body: "Surveys and dashboards for students, staff, citizens, or clients.",
    },
    {
      title: "Social and cultural research",
      body: "Studies of behaviour and values for public education, mobilisation, and CSR.",
    },
  ] satisfies Point[],
};

export const market: Service = {
  eyebrow: "Markets",
  title: "Market research and quality",
  image: "/images/eduvista-market.jpg",
  alt: "A wax seal, linen ribbon, and a cream folder on dark green marble.",
  lede: [
    "Market, brand, and quality work so organisations enter markets, measure trust, and meet accreditation standards.",
  ],
  points: [
    {
      title: "Market landscape",
      body: "Entry, product validation, sizing, competitors, and demand.",
    },
    {
      title: "Brand and trust",
      body: "Visibility, relevance, and reputation, with dashboards for strategy.",
    },
    {
      title: "Experience audits",
      body: "Student, client, and partner touchpoints, including NPS and CSAT.",
    },
    {
      title: "Quality and accreditation",
      body: "Support against ISO, CHE, and related education and training frameworks.",
    },
  ],
};

export const moments = [
  {
    src: "/images/moment-map.jpg",
    title: "A first university map",
    alt: "Ink and watercolor drawing of a campus on a folded map, with a gold path and a compass.",
  },
  {
    src: "/images/moment-stem.jpg",
    title: "A STEM problem",
    alt: "Ink and watercolor still life of a sphere, a triangle, and a plant in a beaker.",
  },
  {
    src: "/images/moment-thesis.jpg",
    title: "A thesis margin",
    alt: "Ink and watercolor drawing of an open thesis with a gold mark in the margin.",
  },
  {
    src: "/images/moment-interview.jpg",
    title: "A mock interview",
    alt: "Ink and watercolor drawing of two people seated across a small table.",
  },
  {
    src: "/images/moment-survey.jpg",
    title: "A field survey",
    alt: "Ink and watercolor drawing of two figures with a clipboard on a green hillside.",
  },
  {
    src: "/images/moment-seal.jpg",
    title: "A quality seal",
    alt: "Ink and watercolor medallion with a laurel wreath and a check mark.",
  },
];

export const hours = [
  ["Monday", "09:00 am – 05:00 pm"],
  ["Tuesday", "09:00 am – 05:00 pm"],
  ["Wednesday", "09:00 am – 05:00 pm"],
  ["Thursday", "09:00 am – 05:00 pm"],
  ["Friday", "09:00 am – 05:00 pm"],
  ["Saturday", "09:00 am – 01:00 pm"],
  ["Sunday", "Closed"],
];
