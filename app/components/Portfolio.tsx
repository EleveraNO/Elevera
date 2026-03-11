"use client";

import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const projects = [
  {
    id: "EosOE2prQT0",
    client: "Cut O' Clock",
    category: "Foto & Video",
    description: "Brandingvideo for frisørsalong i Ålesund",
  },
  {
    id: "EyM9C46GKas",
    client: "Drive Trafikkskule",
    category: "Foto & Video",
    description: "Promovideo for trafikkskole i Ålesund",
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="px-6 py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5 text-sm font-medium text-[#7c3aed]">
              Portefølje
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Resultater vi er stolte av
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Se hva vi har laget for våre kunder
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <button
                onClick={() => setActiveVideo(project.id)}
                className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111] aspect-video"
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${project.id}/hqdefault.jpg`}
                  alt={project.client}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#7c3aed] group-hover:bg-[#7c3aed]/20">
                    <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <span className="mb-2 inline-block rounded-full bg-[#7c3aed]/20 px-3 py-1 text-xs font-medium text-[#7c3aed]">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{project.client}</h3>
                  <p className="text-sm text-white/60">{project.description}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm"
            >
              Lukk ✕
            </button>
            <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "9/16" }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
