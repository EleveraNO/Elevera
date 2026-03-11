"use client";

import { StaggerContainer, StaggerItem } from "./animations";

const projects = [
  {
    src: "/videos/cut-o-clock.mp4",
    client: "Cut O' Clock",
  },
  {
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-12">
      <StaggerContainer className="mx-auto flex max-w-2xl justify-center gap-4">
        {projects.map((project) => (
          <StaggerItem key={project.src} className="w-[calc(50%-8px)]">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                src={project.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm font-semibold text-white">{project.client}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
