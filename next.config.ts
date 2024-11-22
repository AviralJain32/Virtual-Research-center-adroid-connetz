import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
}

const nextConfig: NextConfig = {
  /* config options here */
  
};

export default nextConfig;
  // --turbopack