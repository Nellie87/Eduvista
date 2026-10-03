import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EduVista Global Network",
    template: "%s · EduVista Global Network",
  },
  description:
    "EduVista Global Network empowers learners through academic and career solutions, from pre-university planning to postgraduate research and institutional insight.",
};

export const viewport: Viewport = {
  themeColor: "#022635",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <div id="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
