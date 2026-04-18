import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevera.no"),
  title: "Elevera – Vekstbyrå i Ålesund | Nettside, Foto & Digital annonsering",
  description:
    "Vekstbyrå i Ålesund. Vi lager innhold, nettsider og annonsering som flytter nåla i virksomheten — målt i resultater, ikke estetikk.",
  keywords: [
    "vekstbyrå Ålesund",
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
    title: "Elevera – Vekstbyrå i Ålesund",
    description:
      "Innhold, sosialt, nettside, SEO og annonsering for lokale bedrifter på Sunnmøre. Målt i resultater.",
    siteName: "Elevera",
    locale: "nb_NO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevera – Vekstbyrå i Ålesund",
    description:
      "Innhold, sosialt, nettside, SEO og annonsering for lokale bedrifter på Sunnmøre. Målt i resultater.",
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
      <body className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}>
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
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
