import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactCompiler: true,
  cacheComponents: true,
  /* config options here */
};

export default nextConfig;
