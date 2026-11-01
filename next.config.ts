import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  devIndicators: false,
  images: {
    unoptimized: true,
    qualities: [75, 95],
  },
};
export default nextConfig;
