"use client";

import { MouseEvent } from "react";
import { draftHref, DraftKind, INBOX } from "@/lib/site";

const LINKS: { kind: DraftKind; label: string; blank?: boolean }[] = [
  { kind: "gmail", label: "Gmail", blank: true },
  { kind: "outlook", label: "Outlook", blank: true },
  { kind: "app", label: "Email app" },
];

export function OpenDraft({
  compose,
}: {
  compose: (data: FormData) => { subject: string; body: string };
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const form = event.currentTarget.closest("form");
    if (!form || !form.reportValidity()) {
      event.preventDefault();
      return;
    }
    const kind = event.currentTarget.dataset.kind as DraftKind;
    const { subject, body } = compose(new FormData(form));
    event.currentTarget.href = draftHref(kind, subject, body);
  }

  return (
    <div className="draft-actions" role="group" aria-label="Open email draft">
      {LINKS.map((link) => (
        <a
          key={link.kind}
          className="btn"
          data-kind={link.kind}
          href={`mailto:${INBOX}`}
          target={link.blank ? "_blank" : undefined}
          rel={link.blank ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
