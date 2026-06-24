import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/spotify/:path*',
        destination: 'https://api.spotify.com/:path*',
      },
    ]
  },
};

export default nextConfig;
