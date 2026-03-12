import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
