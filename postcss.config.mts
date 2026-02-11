import type { UserDefinedOptions as PurgeCssOptions } from '@fullhuman/postcss-purgecss';
import type { Config as PostCSSConfig } from 'postcss-load-config';
import type { pluginOptions as PostCSSPresetEnvOptions } from 'postcss-preset-env';

const isProd = process.env.NODE_ENV === 'production';

const purgeCssOptions: PurgeCssOptions = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-bootstrap/**/*.js',
  ],
  safelist: {
    standard: [ 'html', 'body' ],
    deep: [ /modal-/u, /show/u, /fade/u ],
  },
  defaultExtractor: content => content.match(/[\w\-/:]+(?<!:)/gu) ?? [],
};

const postCSSPresetEnvOptions: PostCSSPresetEnvOptions = {
  autoprefixer: { flexbox: 'no-2009' },
  stage: 3,
  features: { 'custom-properties': false },
};

const postCSSConfig: PostCSSConfig = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': postCSSPresetEnvOptions,
    ...(isProd ? { '@fullhuman/postcss-purgecss': purgeCssOptions } : {}),
  },
};

export default postCSSConfig;
