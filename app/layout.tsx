import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import LogoIntro from "./components/LogoIntro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevera.no"),
  title: "Elevera – Foto, Video & Annonsering i Ålesund",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5S67ZX9GY1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5S67ZX9GY1');
          `}
        </Script>
        <LogoIntro />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
