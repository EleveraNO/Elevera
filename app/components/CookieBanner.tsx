"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function CookieBanner() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {/* Google Analytics – lastes kun ved samtykke */}
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Cookie-banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#111111]/95 backdrop-blur-md px-6 py-5">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="text-sm font-semibold text-white mb-1">
                Vi bruker informasjonskapsler
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Vi bruker cookies for å analysere trafikk og forbedre opplevelsen din.
                Les vår{" "}
                <a href="#" className="text-[#7c3aed] hover:underline">
                  personvernserklæring
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3 sm:flex-shrink-0">
              <button
                onClick={decline}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
              >
                Avslå
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/20"
              >
                Godta alle
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
