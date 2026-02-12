const isDev = process.env.NODE_MODE === 'production';

const expectedVariables = [
  'GOOGLE_ANALYTICS_ID',
  'BREVO_CLIENT_KEY',
  'NEXT_PUBLIC_FACEBOOK_ID',
  'TIKTOK_ID',
  'BING_ID',
  'BREVO_CONVERSATIONS_ID',
  'BREVO_GROUP_ID',
  'JWT_SECRET_BASE64',
] as const;

// eslint-disable-next-line @typescript-eslint/require-await
export const register = async () => {
  for (const variable of expectedVariables) {
    const message = `Environment variable ${variable} not found`;
    if (!process.env[variable]) {
      if (isDev) {
        throw Error(message);
      } else {
        console.warn(message);
      }
    }
  }
};
