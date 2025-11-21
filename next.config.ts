import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://raw.githubusercontent.com/PokeAPI/**')]
  },
  async redirects() {
    return [
      {
        source: '/pokemon',
        destination: '/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
