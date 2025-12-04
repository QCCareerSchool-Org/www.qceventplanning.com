/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(/** @type {import('webpack').Configuration} config */ config) {
    config.module.rules.push({
      test: /\.svg$/u,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
};

export default nextConfig;
