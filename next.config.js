/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
  
    return config;
  },
  experimental: {
    serverActions: {
      allowedOrigins: [ 'https://go.qceventplanning.com' ],
    }
  }
};

module.exports = nextConfig;
