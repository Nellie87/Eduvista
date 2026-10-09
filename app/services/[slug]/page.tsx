import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.lede[0] };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const home = service.audience === "learners" ? "/#learners" : "/#institutions";
  const homeLabel =
    service.audience === "learners" ? "Services for learners" : "Services for institutions";
  const related = services.filter(
    (entry) => entry.audience === service.audience && entry.slug !== service.slug,
  );

  return (
    <main className="svc-page">
      <div className="wrap">
        <a className="svc-back" href={home}>
          {homeLabel}
        </a>

        <header className="svc-hero">
          <figure className="svc-hero-visual">
            <img src={service.image} alt={service.alt} />
          </figure>
          <div>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            {service.lede.map((paragraph) => (
              <p key={paragraph} className="svc-hero-lede">
                {paragraph}
              </p>
            ))}
            <a className="btn" href="/#contact">
              Enquire about this service
            </a>
          </div>
        </header>

        {service.points ? (
          <section className="svc-section" aria-labelledby="svc-covers">
            <h2 id="svc-covers">What this covers</h2>
            <ul className="point-grid">
              {service.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.body}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {service.rows ? (
          <section className="svc-section" aria-labelledby="svc-covers">
            <h2 id="svc-covers">Certification tracks</h2>
            <div className="cred-grid">
              {service.rows.map((row) => (
                <div key={row[0]}>
                  <strong>{row[0]}</strong>
                  <span>{row[1]}</span>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="svc-section" aria-labelledby="svc-more">
          <h2 id="svc-more">More {service.audience === "learners" ? "learner" : "institution"} services</h2>
          <ul className="svc-related">
            {related.map((entry) => (
              <li key={entry.slug}>
                <a href={`/services/${entry.slug}`}>
                  <small>{entry.eyebrow}</small>
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
