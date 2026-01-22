import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eforte.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.dmca.com',
        port: '',
        pathname: '/Badges/**',
      },
    ],
  },
};

export default nextConfig;
