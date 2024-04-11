/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    const BACKEND_ORIGIN =
      (process.env.NODE_ENV === 'production' &&
        'https://ground-seesaw.vercel.app') ||
      (process.env.NODE_ENV === 'development' && 'http://localhost:3000') ||
      '';

    return [
      {
        source: '/:path*',
        destination: `${BACKEND_ORIGIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;
