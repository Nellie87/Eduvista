"use client";

import { FormEvent, useState } from "react";
import { openDraft } from "@/lib/site";

export function Newsletter() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    openDraft(
      "EduVista newsletter signup",
      `Please add this address to the EduVista mailing list:\n${email}\n\nThis website does not store the signup.`,
    );
    setOpened(true);
  }

  return (
    <form className="letter-form" onSubmit={onSubmit}>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <button className="btn" type="submit">
        Sign up
      </button>
      {opened && (
        <p className="hint" role="status">
          A draft is opening to info@eduvistaglobalnetwork.org. Send it to join the list.
        </p>
      )}
    </form>
  );
}
