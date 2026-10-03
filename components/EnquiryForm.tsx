"use client";

import { FormEvent, useState } from "react";
import { openDraft } from "@/lib/site";

export function EnquiryForm() {
  const [names, setNames] = useState<string[]>([]);
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const files = names.length ? names.map((name) => `- ${name}`).join("\n") : "- None listed";
    const body = [
      "Appointment request",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Enquiring as: ${data.get("audience")}`,
      "",
      "Message:",
      String(data.get("message") ?? ""),
      "",
      "Files to attach:",
      files,
      "",
      "Please attach the files in your email app before sending. This website does not store the enquiry.",
    ].join("\n");
    openDraft("EduVista appointment request", body);
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>I am enquiring as</span>
        <select name="audience" defaultValue="A learner" required>
          <option>A learner</option>
          <option>A family</option>
          <option>An institution</option>
        </select>
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <label className="file">
        <input
          name="files"
          type="file"
          multiple
          onChange={(event) => {
            const files = event.target.files ? Array.from(event.target.files) : [];
            setNames(files.map((file) => file.name));
          }}
        />
        <span>Choose files</span>
      </label>
      {names.length > 0 && (
        <ul className="filenames">
          {names.map((name, index) => (
            <li key={`${name}-${index}`}>{name}</li>
          ))}
        </ul>
      )}
      <p className="hint">
        Thank you for considering us for your family&apos;s educational needs. When you fill out the
        appointment request form, please be sure to upload the form you filled out for the current
        school year. File names are listed in the draft. You attach the files in your email app.
      </p>
      <button className="btn" type="submit">
        Open email draft
      </button>
      {opened && (
        <p className="hint" role="status">
          Your email draft is opening to info@eduvistaglobalnetwork.org. Attach any files there before
          you send.
        </p>
      )}
    </form>
  );
}
