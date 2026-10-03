"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#learners", label: "Learners" },
  { href: "/#institutions", label: "Institutions" },
  { href: "/#moments", label: "Moments" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={solid || open ? "header solid" : "header"}>
      <a className="logo" href="/#top">
        <span className="mark" aria-hidden="true" />
        EduVista
      </a>
      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-right">
        <a className="btn header-btn" href="/#contact">
          Enquire
        </a>
        <button
          className={open ? "nav-toggle open" : "nav-toggle"}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="bars" />
        </button>
      </div>
      {open &&
        createPortal(
          <nav id="mobile-menu" className="menu" aria-label="Mobile">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="btn" href="/#contact" onClick={() => setOpen(false)}>
              Enquire
            </a>
          </nav>,
          document.body,
        )}
    </header>
  );
}
