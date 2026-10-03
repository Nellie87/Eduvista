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
    "We are a global academic and career empowerment hub delivering data-driven, integrity-rooted, and innovation-led solutions that ensure every learner thrives.",
    "Mission. To deliver data-driven academic and career solutions that inspire success, ensure timely graduation, and unlock global opportunities.",
    "Vision. To be the leading global force in academic and career empowerment through excellence, innovation, and lifelong impact.",
    "We offer tailored, data-informed solutions driven by integrity, innovation, and a commitment to global excellence — ensuring every learner thrives and every outcome counts.",
    "At EduVista, the future is not a distant promise — it is an ecosystem we intentionally cultivate through mentorship, research, and global opportunity. We believe that excellence is not a destination but a dynamic continuum, powered by purpose and precision.",
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
  "At EduVista, the future is not a distant promise — it is an ecosystem we intentionally cultivate through mentorship, research, and global opportunity. We believe that excellence is not a destination but a dynamic continuum, powered by purpose and precision.";

export const commitments = [
  {
    lead: "Empowering",
    rest: "academic trajectories with globally informed advice that nurtures excellence from pre-university to postgraduate levels.",
  },
  {
    lead: "Elevating",
    rest: "postgraduate research into a driver of scholarly relevance, policy influence, and global contribution.",
  },
  {
    lead: "Equipping",
    rest: "professionals with the tools, certifications, and readiness to access and excel in impactful careers across continents.",
  },
];

export const aboutClosing = [
  "We are crafting futures that don’t merely respond to change, they define it.",
  "At EduVista, the future is shaped by every learner we guide, every discovery we mentor, and every professional we empower.",
];

export const learners: Service[] = [
  {
    eyebrow: "Academic pathway",
    title: "Advisory and excellence support",
    image: "/images/eduvista-pathway.jpg",
    alt: "A brass compass and a closed notebook on a wooden desk at dusk.",
    lede: [
      "At EduVista, we don’t just support academic journeys — we shape transformative futures. Through a personalized and globally informed advisory framework, we provide strategic guidance from pre-university planning to postgraduate excellence. Our approach integrates mentorship-driven insights, performance tracking, and global exposure to ensure that every learner not only gains admission but thrives throughout their academic journey. We unlock each learner’s potential and nurture a culture of excellence.",
      "University and program selection helps students align academic goals with real-world opportunities and global impact.",
    ],
    points: [
      {
        title: "Pre-university navigation",
        body: "Guiding high school graduates in identifying best-fit universities and programs based on career aspirations, strengths, and future relevance.",
      },
      {
        title: "Undergraduate advisory",
        body: "Supporting current and aspiring university students through benchmarking, course optimization, academic progression, and degree completion strategies.",
      },
      {
        title: "Postgraduate placement strategy",
        body: "Helping candidates identify and apply to internationally recognized master’s and PhD programs that match their research and career ambitions.",
      },
      {
        title: "Scholarship and financial aid access",
        body: "Equipping students with tools and mentorship to unlock competitive local and international funding opportunities.",
      },
    ],
  },
  {
    eyebrow: "STEM",
    title: "Academic mastery tutorials",
    image: "/images/eduvista-stem.jpg",
    alt: "Pencils, a glass sphere, and a planted beaker on a quiet study table.",
    lede: [
      "We go beyond tutoring. Mastery-focused academic support empowers students to own their learning, build confidence, and achieve peak academic performance — particularly in STEM disciplines.",
    ],
    points: [
      {
        title: "Subject-specific mastery",
        body: "Personalized tutorials in Science (Physics, Chemistry, Biology), Mathematics (Statistics, Calculus, Algebra), Engineering, and Environmental Science — designed to close learning gaps and unlock excellence.",
      },
      {
        title: "Interactive and applied learning",
        body: "Dynamic, real-time sessions that promote problem-solving, critical thinking, and concept retention using modern tools and simulations.",
      },
      {
        title: "Accelerated academic progression",
        body: "Graduation recovery plans, study management, and continuous performance evaluation to help students stay on track and ahead.",
      },
    ],
  },
  {
    eyebrow: "Research",
    title: "Postgraduate research excellence",
    image: "/images/eduvista-research.jpg",
    alt: "An open manuscript with a fountain pen in warm lamplight.",
    lede: [
      "At EduVista, we champion postgraduate success by nurturing a culture of research excellence, innovation, and global scholarly contribution. Our holistic research mentorship empowers master’s and doctoral candidates to confidently navigate the entire academic journey — from coursework mastery to impactful publication — while building the competencies required to lead in academia, policy, and industry.",
      "We provide structured and personalized support that enables postgraduate students to develop world-class research outputs and excel in their academic programs.",
    ],
    points: [
      {
        title: "Coursework and academic writing",
        body: "Expert coaching in postgraduate coursework, including advanced academic writing, referencing, and exam readiness — so learners excel in both coursework and comprehension.",
      },
      {
        title: "Proposal and thesis development",
        body: "From research idea to thesis completion: topic development, proposal writing, data analysis (SPSS, R, Python, NVivo), and academic structuring to meet global standards.",
      },
      {
        title: "Publishing and research visibility",
        body: "Support for peer-reviewed publication through manuscript preparation, journal submission, and scholarly communication.",
      },
      {
        title: "Researcher identity and capacity building",
        body: "Research ethics, presentation skills, and global collaboration networks, so learners can become thought leaders.",
      },
    ],
  },
  {
    eyebrow: "Coaching",
    title: "Academic coaching and performance empowerment",
    image: "/images/eduvista-coaching.jpg",
    alt: "Two people seated in a library, seen from behind, facing a bright window.",
    lede: [
      "Academic excellence is cultivated, not left to chance. The Academic Coaching program transforms learners into strategic, reflective scholars through personalized guidance and holistic development. Students are empowered to:",
    ],
    points: [
      {
        title: "Define purposeful academic goals",
        body: "Goals that align with long-term scholarly and professional trajectories.",
      },
      {
        title: "Adopt evidence-based study strategies",
        body: "Strategies rooted in cognitive science and active learning principles.",
      },
      {
        title: "Conquer academic barriers",
        body: "Performance anxiety, procrastination, and burnout, met through resilience coaching and mindset transformation.",
      },
      {
        title: "Build metacognitive skills",
        body: "Self-directed learning, critical reflection, and adaptive problem-solving.",
      },
      {
        title: "Engage in continuous academic self-improvement",
        body: "Structured feedback loops, progress tracking, and tailored intervention plans.",
      },
    ],
    closing:
      "At EduVista, we don’t just coach students — we cultivate scholarly excellence that endures.",
  },
  {
    eyebrow: "Careers",
    title: "Global career and professional preparedness",
    image: "/images/eduvista-career.jpg",
    alt: "Two empty oak chairs in a calm interview room with warm window light.",
    lede: [
      "EduVista empowers graduates and professionals to confidently navigate international career landscapes by equipping them with competitive employability skills, strategic job placement support, and access to globally recognized professional certifications.",
      "The approach transforms ambition into action — ensuring learners are not only ready for the job market but positioned to thrive in high-demand, high-impact global roles.",
      "We offer a suite of services designed to enhance your career prospects locally and internationally.",
    ],
    points: [
      {
        title: "CV, cover letter, and interview mastery",
        body: "Personalized coaching for winning CVs and cover letters tailored to specific job markets. Mock interviews and interview-readiness training so candidates perform confidently and professionally.",
      },
      {
        title: "Internship and industry attachment placement",
        body: "Connection to structured internship and attachment opportunities in Africa, Europe, North America, and Asia. Career-aligned placements that build real-world experience and support long-term employability.",
      },
      {
        title: "Visa-sponsored job placement support",
        body: "Strategic support in identifying, applying, and preparing for international job opportunities with visa sponsorship. Guidance on documentation, employer targeting, and relocation planning.",
      },
    ],
  },
];

export const certification = {
  eyebrow: "Credentials",
  title: "Professional certification and career advancement",
  lede: [
    "Career-focused advisory so learners can boost their qualifications, gain credibility, and remain competitive in a global market.",
    "Certification pathway planning. Identification of high-impact certifications based on individual career goals and market trends. Support in enrollment, preparation, and integration with academic qualifications.",
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
    "At EduVista, the future is not an abstract destination — it’s a reality we build through knowledge, inquiry, and insight. With our portfolio in research consultancy, polling, and market intelligence, we are redefining what it means to inform leadership, shape systems, and elevate institutions.",
    "We envision a future where policy is driven by evidence, not guesswork; where brands grow through trust, not noise; and where academic and civic communities thrive on clarity, accountability, and actionable data. Whether through a baseline survey, a brand audit, or a quality assurance review, we empower organizations to not only respond to change, but to lead it.",
    "At EduVista, we don’t just forecast trends — we fuel transformation. Our work connects decision-makers with data, institutions with insight, and ambition with measurable impact. The future belongs to the informed. And at EduVista, we make that future possible — one insight, one institution, and one transformation at a time.",
  ],
};

export const consultancy: Service = {
  eyebrow: "Evidence",
  title: "Research consultancy and evidence-based policy support",
  image: "/images/eduvista-field.jpg",
  alt: "Blank clipboards and a brass survey marker on an outdoor table at dusk.",
  lede: [
    "At EduVista, we equip institutions and organizations with the power of research to lead wisely and act decisively. Our consultancy services fuse academic excellence with sector-specific relevance — offering precision in design, rigor in execution, and clarity in interpretation. From university program audits to government policy evaluations, we deliver insights that shape systems, inform strategy, and drive meaningful transformation. We don’t just generate research — we co-create impact.",
  ],
  points: [
    {
      title: "Institutional program evaluation and academic audits",
      body: "In-depth evaluations of university, TVET, and college programs aligned with accreditation and continuous improvement frameworks. Benchmarking and institutional research support for data-driven governance.",
    },
    {
      title: "Policy impact and sectoral research studies",
      body: "Rigorous studies to assess policy effectiveness across education, health, and governance sectors. From baseline assessments to post-policy reviews, we translate data into actionable recommendations.",
    },
    {
      title: "Postgraduate thesis mentorship with an institutional focus",
      body: "Support for master’s and PhD students whose research addresses institutional reform or national development priorities. Hands-on guidance in instrument design, data analysis, and publication preparation.",
    },
    {
      title: "Monitoring, evaluation, and learning (MEL) systems",
      body: "MEL framework development and deployment for NGOs, government programs, and donor-funded initiatives. Baseline, midline, and endline surveys with capacity-building support.",
    },
  ],
};

export const polls = {
  eyebrow: "Public voice",
  title: "Poll surveys, opinion analytics, and public engagement",
  lede: [
    "In a world shaped by perception, understanding public opinion is not optional — it’s essential. EduVista designs and conducts high-integrity surveys that decode attitudes, track sentiment, and amplify citizen voices. Whether for political strategy, civic engagement, or service delivery improvement, we offer ethically grounded, statistically robust polling that leaders can trust. At EduVista, we help you listen beyond the noise — and respond with precision.",
  ],
  points: [
    {
      title: "Political sentiment polling and voter behavior analytics",
      body: "Constituency-based, issue-focused polls for political parties, candidates, and election strategists. Evidence-backed voter mapping and campaign diagnostics.",
    },
    {
      title: "Public policy and civic attitude surveys",
      body: "Community perception studies on governance, service delivery, and public confidence. Insight reports to inform reform and communication strategies.",
    },
    {
      title: "Stakeholder satisfaction and service feedback tools",
      body: "Customized surveys and digital dashboards to monitor satisfaction across students, staff, citizens, or clients. Ideal for universities, healthcare institutions, and public agencies.",
    },
    {
      title: "Social behavior and cultural perception research",
      body: "Ethnographic and quantitative studies on behaviours, values, and social change indicators. Designed to guide public education, community mobilization, and CSR.",
    },
  ] satisfies Point[],
};

export const market: Service = {
  eyebrow: "Markets",
  title: "Market research, brand indexing, and quality assurance",
  image: "/images/eduvista-market.jpg",
  alt: "A wax seal, linen ribbon, and a cream folder on dark green marble.",
  lede: [
    "In fast-evolving markets, success belongs to the informed. EduVista empowers organizations to decode markets, elevate brand positioning, and align operations with global quality standards. Through custom-built surveys, competitive benchmarking, and client experience analytics, we help you stay ahead — strategically and reputationally. Our quality assurance consultancy ensures that institutions not only meet compliance — they exceed expectations. Insight is power. EduVista delivers both.",
  ],
  points: [
    {
      title: "Corporate and educational market landscape surveys",
      body: "Research to support new market entry, product validation, and program launches. Market sizing, competitor analysis, and demand forecasting.",
    },
    {
      title: "Brand equity and institutional trust surveys",
      body: "Brand strength measurement using visibility, relevance, and reputation indicators. Insight dashboards to track trends and inform branding strategy.",
    },
    {
      title: "Customer experience and service satisfaction audits",
      body: "Experience audits across touchpoints — students, clients, and partners — to inform continuous improvement. Integration with Net Promoter Scores (NPS), CSAT, and open feedback.",
    },
    {
      title: "Quality assurance consultancy and accreditation support",
      body: "Strategic support for institutions preparing for accreditation or re-certification. Alignment with ISO, CHE, and other quality frameworks for education and professional training.",
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
