"use client";

import { useEffect, useRef } from "react";
import { StaggerContainer, StaggerItem } from "./animations";

const projects = [
  {
    src: "/videos/cut-o-clock.mp4",
    client: "Cut O' Clock",
    href: "/prosjekter/cut-o-clock",
  },
  {
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
    href: null,
  },
];

function AutoplayVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-12">
      <StaggerContainer className="mx-auto flex max-w-2xl justify-center gap-4">
        {projects.map((project) => {
          const inner = (
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10"
              style={{ aspectRatio: "9/16" }}
            >
              <AutoplayVideo src={project.src} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm font-semibold text-white">{project.client}</p>
                {project.href && (
                  <p className="text-xs text-white/60">Se casestudie →</p>
                )}
              </div>
            </div>
          );
          return (
            <StaggerItem key={project.src} className="w-[calc(50%-8px)]">
              {project.href ? (
                <a href={project.href}>{inner}</a>
              ) : (
                inner
              )}
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
