import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevera.no"),
  title: "Elevera – Digitalbyrå i Ålesund | Nettside, Foto & Annonsering",
  description:
    "Elevera er et digitalbyrå i Ålesund som hjelper lokale bedrifter å vokse på nett med profesjonell foto & video, konverterende nettsider og betalt annonsering.",
  keywords: [
    "digitalbyrå Ålesund",
    "nettside Ålesund",
    "markedsføring Ålesund",
    "foto video Ålesund",
    "Facebook annonsering",
    "Google Ads",
    "SEO Ålesund",
    "Elevera",
  ],
  alternates: {
    canonical: "https://elevera.no",
  },
  openGraph: {
    type: "website",
    url: "https://elevera.no",
    title: "Elevera – Digitalbyrå i Ålesund",
    description:
      "Vi hjelper bedrifter i Ålesund og omegn å vokse på nett. Nettside, foto & video, og betalt annonsering – alt fra én partner.",
    siteName: "Elevera",
    locale: "nb_NO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevera – Digitalbyrå i Ålesund",
    description:
      "Vi hjelper bedrifter i Ålesund og omegn å vokse på nett. Nettside, foto & video, og betalt annonsering – alt fra én partner.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${geistSans.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
