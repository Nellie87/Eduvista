"use client";

import { useId, useState, type KeyboardEvent } from "react";
import type { Point } from "@/lib/content";

export type ExplorerItem = {
  eyebrow?: string;
  title: string;
  lede: string[];
  points?: Point[];
  closing?: string;
  image?: string;
  alt?: string;
  rows?: readonly (readonly string[])[];
};

export function ServiceExplorer({ label, items }: { label: string; items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);
  const base = useId();
  const item = items[active] ?? items[0];

  function revealTab(index: number) {
    const tab = document.getElementById(`${base}-tab-${index}`);
    const scroller = tab?.parentElement;
    if (!tab || !scroller) return;
    const tabBox = tab.getBoundingClientRect();
    const box = scroller.getBoundingClientRect();
    if (tabBox.left < box.left) scroller.scrollLeft -= box.left - tabBox.left;
    else if (tabBox.right > box.right) scroller.scrollLeft += tabBox.right - box.right;
  }

  function select(index: number) {
    setActive(index);
    revealTab(index);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const key = event.key;
    const moving = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(key);
    if (!moving) return;
    event.preventDefault();
    const last = items.length - 1;
    let next = active;
    if (key === "ArrowDown" || key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (key === "ArrowUp" || key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (key === "Home") next = 0;
    if (key === "End") next = last;
    select(next);
    document.getElementById(`${base}-tab-${next}`)?.focus();
  }

  const previous = active === 0 ? items.length - 1 : active - 1;
  const next = active === items.length - 1 ? 0 : active + 1;

  if (!item) return null;

  return (
    <div className="explorer">
      <div className="explorer-rail">
        <p className="explorer-cue">
          <span>Choose a service</span>
          <span>
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </p>
        <div
          className="explorer-index"
          role="tablist"
          aria-label={label}
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {items.map((entry, index) => {
            const selected = index === active;
            return (
              <button
                key={entry.title}
                id={`${base}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${base}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
              >
                <span className="explorer-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="explorer-label">
                  {entry.eyebrow ? <small>{entry.eyebrow}</small> : null}
                  {entry.title}
                </span>
                <span className="explorer-go" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14">
                    <path
                      d="M6 3.5 10.5 8 6 12.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <article
        className="explorer-panel"
        id={`${base}-panel`}
        role="tabpanel"
        aria-labelledby={`${base}-tab-${active}`}
        tabIndex={0}
      >
        {item.image ? (
          <figure className="explorer-visual">
            <img src={item.image} alt={item.alt ?? ""} />
          </figure>
        ) : null}
        <div className="explorer-copy">
          {item.eyebrow ? <p className="eyebrow">{item.eyebrow}</p> : null}
          <h3>{item.title}</h3>
          {item.lede.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.points ? (
            <ul className="point-grid">
              {item.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.body}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {item.rows ? (
            <div className="cred-grid">
              {item.rows.map((row) => (
                <div key={row[0]}>
                  <strong>{row[0]}</strong>
                  <span>{row[1]}</span>
                </div>
              ))}
            </div>
          ) : null}
          {item.closing ? <p className="closing">{item.closing}</p> : null}
        </div>
        {items.length > 1 ? (
          <div className="explorer-step">
            <button type="button" onClick={() => select(previous)}>
              <span>Previous</span>
              <strong>{items[previous]?.title}</strong>
            </button>
            <button type="button" className="explorer-next" onClick={() => select(next)}>
              <span>Next service</span>
              <strong>{items[next]?.title}</strong>
            </button>
          </div>
        ) : null}
      </article>
    </div>
  );
}
