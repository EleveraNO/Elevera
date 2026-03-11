import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Montserrat lastes slik at inline SVG-logoen finner riktig font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elevera – Én partner. Alt du trenger for å vokse på nett.",
  description:
    "Elevera er et norsk digitalbyrå som hjelper bedrifter med foto & video, nettsider, betalt annonsering og digital vekststrategi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${geistSans.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
