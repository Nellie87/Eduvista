"use client";

import { FormEvent } from "react";
import { OpenDraft } from "@/components/OpenDraft";

export function Newsletter() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.querySelector<HTMLAnchorElement>("[data-kind='app']")?.click();
  }

  return (
    <form className="letter-form" onSubmit={onSubmit}>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <p className="hint">Opens a draft to info@eduvistaglobalnetwork.org. Send it to join the list.</p>
      <OpenDraft
        compose={(data) => ({
          subject: "EduVista newsletter signup",
          body: `Please add this address to the EduVista mailing list:\n${String(data.get("email") ?? "")}\n\nThis website does not store the signup.`,
        })}
      />
    </form>
  );
}
