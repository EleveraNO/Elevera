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

      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5"
          style={{
            background: "rgba(19,19,18,0.92)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(77,70,53,0.2)",
          }}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p className="mb-1 text-sm font-semibold" style={{ color: "#e5e2de" }}>
                Vi bruker informasjonskapsler
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#99907c" }}>
                Vi bruker cookies for å analysere trafikk og forbedre opplevelsen din.
                Les vår{" "}
                <a href="/personvern" className="underline underline-offset-2 transition-colors" style={{ color: "#f2ca50" }}>
                  personvernerklæring
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3 sm:flex-shrink-0">
              <button
                onClick={decline}
                className="rounded-sm border px-5 py-2.5 text-sm font-bold transition-all"
                style={{ borderColor: "rgba(77,70,53,0.35)", color: "rgba(229,226,222,0.7)" }}
              >
                Avslå
              </button>
              <button
                onClick={accept}
                className="rounded-sm px-5 py-2.5 text-sm font-bold transition-all active:scale-95"
                style={{ background: "#d4af37", color: "#3c2f00" }}
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
