"use client";

const projects = [
  {
    id: "EosOE2prQT0",
    client: "Cut O' Clock",
  },
  {
    id: "EyM9C46GKas",
    client: "Drive Trafikkskule",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-12">
      <div className="mx-auto flex max-w-2xl justify-center gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-2xl border border-white/10"
            style={{ width: "calc(50% - 8px)", aspectRatio: "9/16" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${project.id}?autoplay=1&mute=1&loop=1&playlist=${project.id}&controls=0&rel=0&playsinline=1&modestbranding=1`}
              allow="autoplay; encrypted-media"
              className="absolute inset-0 h-full w-full scale-[1.02]"
              style={{ border: "none", pointerEvents: "none" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-sm font-semibold text-white">{project.client}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
