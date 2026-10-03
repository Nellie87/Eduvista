export const INBOX = "info@eduvistaglobalnetwork.org";
export const WHATSAPP = "https://wa.me/2540780281995";
export const WEB = "https://www.eduvistaglobalnetwork.org";
export const WEB_LABEL = "www.eduvistaglobalnetwork.org";

export function openDraft(subject: string, body: string) {
  window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
