import { WEB, WEB_LABEL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>Copyright © 2026 EduVista Global Network - All Rights Reserved.</p>
        <a href="/privacy">Privacy Policy</a>
        <a href={WEB} rel="noopener noreferrer">
          {WEB_LABEL}
        </a>
      </div>
    </footer>
  );
}
