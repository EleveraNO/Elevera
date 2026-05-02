"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import PageCTA from "../../components/PageCTA";
import { FadeUp } from "../../components/animations";

const ACCENT = "#2F5F3F";
const ACCENT_DIM = "rgba(47,95,63,0.10)";
const ACCENT_BORDER = "rgba(47,95,63,0.28)";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://elevera.no/prosjekter" },
    { "@type": "ListItem", position: 3, name: "Mathilde Teigen", item: "https://elevera.no/prosjekter/mathilde-teigen" },
  ],
};

export default function MathildeTeigen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen bg-[var(--cream)]" style={{ overflowX: "clip" }}>
        <HomeNav />

        {/* Sections fylles inn i påfølgende tasks */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm" style={{ color: "var(--stone-500)" }}>
              Mathilde Teigen — casestudie under bygging.
            </p>
          </div>
        </section>

        <PageCTA heading="Vil du også ha et nettsted som ligner deg?" />
        <HomeFooter />
      </main>
    </>
  );
}
