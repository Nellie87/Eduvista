"use client";

import { useEffect, useState } from "react";

import { acronyms } from "@/lib/content";

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
  const letters = acronyms[index].letters;

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
      <div className="hero-copy">
        <p className="hero-kicker">EduVista Global Network</p>
        <h1>
          <span>Expanding</span>
          <span className="accent">horizons,</span>
          <span>elevating</span>
          <span className="accent">futures</span>
        </h1>
        <div
          className="hero-switch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hero-words">
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
          <p className="hero-line" key={LINES[index].word} aria-live="polite">
            {LINES[index].line}
          </p>
          <ul className="hero-promises" key={"p-" + LINES[index].word} aria-label={acronyms[index].word}>
            {acronyms[index].letters.map((entry, entryIndex) => (
              <li key={entry.meaning} style={{ animationDelay: `${0.12 + entryIndex * 0.07}s` }}>
                <span className={entryIndex % 2 === 0 ? "word-badge gold" : "word-badge teal"} aria-hidden="true">
                  {entry.letter}
                </span>
                {entry.meaning}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn hero-cta" href="#about">
          Explore more
        </a>
      </div>
      <div
        className="hero-orbit"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <span className="hero-ring outer" aria-hidden="true" />
        <span className="hero-ring mid" aria-hidden="true" />
        <span className="hero-ring core" aria-hidden="true" />
        <span className="hero-arrow" aria-hidden="true" />
        <div className="hero-core">
          <small>{acronyms[index].word}</small>
          <strong key={LINES[index].word}>{LINES[index].word}</strong>
          <div className="hero-dots" role="group" aria-label="Choose a word">
            {LINES.map((item, itemIndex) => (
              <button
                key={item.word}
                type="button"
                className={itemIndex === index ? "on" : undefined}
                aria-label={item.word}
                aria-pressed={itemIndex === index}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>
        </div>
        <ul className="hero-letters" key={"o-" + LINES[index].word} aria-label={LINES[index].word}>
          {letters.map((entry, entryIndex) => {
            const angle = (-90 + (entryIndex * 360) / letters.length) * (Math.PI / 180);
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            const side = cos > 0.35 ? "r" : cos < -0.35 ? "l" : sin < 0 ? "t" : "b";
            return (
              <li
                key={entry.meaning}
                className={"hero-letter " + side}
                style={{
                  left: `${50 + 50 * cos}%`,
                  top: `${50 + 50 * sin}%`,
                  animationDelay: `${0.1 + entryIndex * 0.08}s`,
                }}
              >
                <span className={entryIndex % 2 === 0 ? "word-badge gold" : "word-badge teal"} aria-hidden="true">
                  {entry.letter}
                </span>
                {entryIndex === 0 && <span className="hero-start">Start</span>}
                <span className="hero-meaning">{entry.meaning}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
