import {
  certification,
  consultancy,
  learners,
  market,
  polls,
  type Point,
} from "@/lib/content";

export type Audience = "learners" | "institutions";

export type ServiceEntry = {
  slug: string;
  audience: Audience;
  eyebrow: string;
  title: string;
  lede: string[];
  points?: Point[];
  rows?: readonly (readonly string[])[];
  image: string;
  alt: string;
  /** Short topic names shown on the overview card. */
  topics: string[];
};

const learnerSlugs = [
  "academic-advisory",
  "stem-tutorials",
  "postgraduate-research",
  "academic-coaching",
  "career-preparedness",
];

const learnerEntries: ServiceEntry[] = learners.map((service, index) => ({
  slug: learnerSlugs[index] ?? `learner-service-${index + 1}`,
  audience: "learners",
  eyebrow: service.eyebrow,
  title: service.title,
  lede: service.lede,
  points: service.points,
  image: service.image,
  alt: service.alt,
  topics: (service.points ?? []).map((point) => point.title),
}));

const certificationEntry: ServiceEntry = {
  slug: "professional-certification",
  audience: "learners",
  eyebrow: certification.eyebrow,
  title: certification.title,
  lede: certification.lede,
  rows: certification.rows,
  image: certification.image,
  alt: certification.alt,
  topics: certification.rows.map((row) => row[0] ?? ""),
};

function institution(slug: string, service: typeof consultancy | typeof market | typeof polls): ServiceEntry {
  return {
    slug,
    audience: "institutions",
    eyebrow: service.eyebrow,
    title: service.title,
    lede: service.lede,
    points: service.points,
    image: service.image,
    alt: service.alt,
    topics: (service.points ?? []).map((point) => point.title),
  };
}

export const services: ServiceEntry[] = [
  ...learnerEntries,
  certificationEntry,
  institution("research-consultancy", consultancy),
  institution("polls-and-public-engagement", polls),
  institution("market-research-and-quality", market),
];

export const learnerServices = services.filter((service) => service.audience === "learners");
export const institutionServices = services.filter((service) => service.audience === "institutions");

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
