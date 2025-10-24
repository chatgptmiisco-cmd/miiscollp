import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Enables static HTML export
  images: {
    unoptimized: true, // ✅ Required because Next.js image optimizer doesn’t run in static mode
  },
};

export default nextConfig;
