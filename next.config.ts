import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  /* Compress responses */
  compress: true,
};

export default nextConfig;
