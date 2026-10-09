import type { Metadata } from "next";
import { INBOX, WHATSAPP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="wrap page">
      <p className="eyebrow">EduVista Global Network Ltd</p>
      <h1>Privacy Policy</h1>
      <p>
        Enquiries and the mailing list are not saved on this website. You open a draft in Gmail,
        Outlook, or your email app, addressed to <a href={`mailto:${INBOX}`}>{INBOX}</a>. If you choose
        files, their names are written into that draft. You attach the files yourself before you send.
      </p>
      <p>
        WhatsApp opens the chat link published for EduVista:{" "}
        <a href={WHATSAPP} rel="noopener noreferrer">
          {WHATSAPP}
        </a>
        .
      </p>
      <p>The office is in Nairobi, Kenya, and the work reaches clients worldwide.</p>
    </main>
  );
}
