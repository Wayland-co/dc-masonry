import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Broadly permissive remote-image allowlist for the template.
    // Clients can tighten per-deploy by replacing this with a narrow whitelist
    // (e.g. only their CDN). Broad default chosen because briefs may reference
    // any image host (Unsplash, Cloudinary, client S3, etc.) and a narrow
    // default creates a failure mode where images won't render until
    // next.config.ts is hand-edited per deploy.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
