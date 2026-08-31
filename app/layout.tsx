import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10X-your-Skills — Agentic AI Programme",
  description: "12 weeks building AI agents. Free. Remote. 15 places.",
  openGraph: {
    title: "10X-your-Skills — Agentic AI Programme",
    description: "12 weeks building AI agents. Free. Remote. 15 places.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
