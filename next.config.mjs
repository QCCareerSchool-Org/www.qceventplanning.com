import path from 'node:path';

const sassPaths = [
  path.join(process.cwd(), 'node_modules'),
  path.join(process.cwd(), 'node_modules', 'bootstrap', 'scss'),
];

process.env.SASS_PATH = [
  process.env.SASS_PATH,
  ...sassPaths,
].filter(Boolean).join(path.delimiter);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module ??= { rules: [] };
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.svg$/u,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
  sassOptions: {
    includePaths: sassPaths,
    quietDeps: true,
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;
