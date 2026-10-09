"use client";

import { FormEvent, useState } from "react";
import { OpenDraft } from "@/components/OpenDraft";

export function EnquiryForm() {
  const [names, setNames] = useState<string[]>([]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.querySelector<HTMLAnchorElement>("[data-kind='app']")?.click();
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
        File names appear in the draft. Attach the files before you send. Nothing is stored on this
        website.
      </p>
      <OpenDraft
        compose={(data) => ({
          subject: "EduVista appointment request",
          body: [
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
            names.length ? names.map((name) => `- ${name}`).join("\n") : "- None listed",
            "",
            "Please attach the files before sending. This website does not store the enquiry.",
          ].join("\n"),
        })}
      />
    </form>
  );
}
