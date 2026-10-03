import type { Service } from "@/lib/content";

export function Band({ service, flip = false }: { service: Service; flip?: boolean }) {
  return (
    <article className={flip ? "band flip" : "band"}>
      <div className="band-copy">
        <p className="eyebrow">{service.eyebrow}</p>
        <h2>{service.title}</h2>
        {service.lede.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {service.points && (
          <ul className="points">
            {service.points.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </li>
            ))}
          </ul>
        )}
        {service.closing && <p className="closing">{service.closing}</p>}
      </div>
      <figure className="band-visual">
        <img src={service.image} alt={service.alt} loading="lazy" decoding="async" />
      </figure>
    </article>
  );
}
