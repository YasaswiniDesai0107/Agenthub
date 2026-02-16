import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  basePath: '/Agenthub',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
