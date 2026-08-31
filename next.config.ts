import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/10X-your-Skills',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
