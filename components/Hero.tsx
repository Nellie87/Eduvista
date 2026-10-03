"use client";

import { useEffect, useState } from "react";

const LINES = [
  {
    word: "Inspire",
    line: "We don’t just support a goal. We inspire the transformation.",
  },
  {
    word: "Map",
    line: "A personal map, from the first choice through to graduation.",
  },
  {
    word: "Rise",
    line: "Help to rise into study, research, and work that fits.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % LINES.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="hero" id="top">
      <img
        src="/images/eduvista-hero.jpg"
        alt="A person on a ridge looking over forested hills in morning mist."
        fetchPriority="high"
      />
      <div className="hero-copy">
        <p className="hero-kicker">EduVista Global Network</p>
        <h1>
          <span>Expanding</span>
          <span className="accent">horizons,</span>
          <span>elevating</span>
          <span className="accent">futures</span>
        </h1>
        <div
          className="hero-words"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {LINES.map((item, itemIndex) => (
            <button
              key={item.word}
              type="button"
              className={itemIndex === index ? "on" : undefined}
              aria-pressed={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            >
              {item.word}
            </button>
          ))}
        </div>
        <p className="hero-line" aria-live="polite">
          {LINES[index].line}
        </p>
        <a className="btn" href="#about">
          Explore more
        </a>
      </div>
    </section>
  );
}
