import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    /* Serve local uploads with better caching */
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  /* Compress responses */
  compress: true,
};

export default nextConfig;
