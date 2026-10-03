import type { Point } from "@/lib/content";

export type ArticleContent = {
  eyebrow?: string;
  title: string;
  lede: string[];
  points?: Point[];
  closing?: string;
};

export function anchorId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Article({ article }: { article: ArticleContent }) {
  return (
    <article className="service" id={anchorId(article.title)}>
      {article.eyebrow ? <p className="eyebrow">{article.eyebrow}</p> : null}
      <h3>{article.title}</h3>
      {article.lede.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {article.points ? (
        <ul>
          {article.points.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <span>{point.body}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {article.closing ? <p className="closing">{article.closing}</p> : null}
    </article>
  );
}
