import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@trb/ui'],
  reactStrictMode: true,
};

export default nextConfig;
