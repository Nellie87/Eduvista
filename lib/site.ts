export const INBOX = "info@eduvistaglobalnetwork.org";
export const WHATSAPP = "https://wa.me/2540780281995";
export const WEB = "https://www.eduvistaglobalnetwork.org";
export const WEB_LABEL = "www.eduvistaglobalnetwork.org";

export type DraftKind = "gmail" | "outlook" | "app";

function query(params: Record<string, string>) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export function draftHref(kind: DraftKind, subject: string, body: string) {
  if (kind === "gmail") {
    return `https://mail.google.com/mail/?${query({ view: "cm", fs: "1", to: INBOX, su: subject, body })}`;
  }
  if (kind === "outlook") {
    return `https://outlook.office.com/mail/deeplink/compose?${query({ to: INBOX, subject, body })}`;
  }
  return `mailto:${INBOX}?${query({ subject, body })}`;
}
