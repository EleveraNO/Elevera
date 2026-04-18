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
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Informasjonskapsler">
          <div className="cookie-banner-inner wrap">
            <div className="cookie-banner-body">
              <p className="cookie-banner-title">Vi bruker informasjonskapsler</p>
              <p className="cookie-banner-text">
                Vi bruker cookies for å analysere trafikk og forbedre opplevelsen din. Les vår{" "}
                <a href="/personvern">personvernerklæring</a>.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button type="button" className="btn btn-ghost" onClick={decline}>
                Avslå
              </button>
              <button type="button" className="btn btn-primary" onClick={accept}>
                Godta alle
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
