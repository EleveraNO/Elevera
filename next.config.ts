import type { NextConfig } from "next";

/**
 * Content Security Policy — whitelist every external origin the site touches.
 *
 * Kilder:
 *  - Google Fonts (next/font laster fonter fra gstatic.com)
 *  - Google Analytics / Tag Manager
 *  - Formspree (kontakt-skjema POST)
 *  - Unsplash (brukt i noen eldre service-komponenter)
 *  - Google Calendar (embedded iframe + appointment-URL-er)
 *  - Vercel Analytics (hvis det skrus på senere)
 */
const cspDirectives = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Next.js hydration scripts
    "'unsafe-eval'",   // framer-motion / Next dev
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'", // Tailwind + framer-motion style props
    "https://fonts.googleapis.com",
  ],
  "font-src": [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://images.unsplash.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://calendar.google.com",
  ],
  "connect-src": [
    "'self'",
    "https://formspree.io",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://stats.g.doubleclick.net",
  ],
  "frame-src": [
    "'self'",
    "https://calendar.google.com",
    "https://www.google.com",
  ],
  "media-src": ["'self'", "blob:"],
  "frame-ancestors": ["'none'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'", "https://formspree.io"],
  "upgrade-insecure-requests": [],
};

const cspValue = Object.entries(cspDirectives)
  .map(([k, v]) => (v.length ? `${k} ${v.join(" ")}` : k))
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspValue },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "accelerometer=()",
      "autoplay=(self)",
      "camera=()",
      "display-capture=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "microphone=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "0" }, // Modern browsers: disable legacy XSS auditor; CSP covers this.
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/prosjekter/cut-o-clock",
        destination: "/prosjekter/cutoclock",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
