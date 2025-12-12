import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module ??= { rules: [] };
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.svg$/u,
      use: [ '@svgr/webpack' ],
    });

    return config;
  },
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;
