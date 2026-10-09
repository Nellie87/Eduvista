import type { ServiceEntry } from "@/lib/services";

const TOPIC_LIMIT = 4;

/** Overview cards. Each one links to the full page for that service. */
export function ServiceCards({ label, items }: { label: string; items: ServiceEntry[] }) {
  return (
    <ul className="svc-grid" aria-label={label}>
      {items.map((item, index) => {
        const extra = item.topics.length - TOPIC_LIMIT;
        return (
          <li key={item.slug}>
            <a className="svc-card" href={`/services/${item.slug}`}>
              <figure className="svc-visual">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </figure>
              <div className="svc-body">
                <p className="svc-eyebrow">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.eyebrow}
                </p>
                <h3>{item.title}</h3>
                <p className="svc-lede">{item.lede[0]}</p>
                {item.topics.length > 0 ? (
                  <ul className="svc-topics">
                    {item.topics.slice(0, TOPIC_LIMIT).map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                    {extra > 0 ? <li className="svc-topic-more">+{extra} more</li> : null}
                  </ul>
                ) : null}
                <span className="more">
                  Learn more<span className="sr-only"> about {item.title}</span>
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
