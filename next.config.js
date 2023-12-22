/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  transpilePackages: ['react-tweet'],
  redirects: async () => {
    return [
      {
        source: '/join-discord',
        destination: 'https://twitter.com/mohitdebian',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig
