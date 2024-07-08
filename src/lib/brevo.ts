declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  console.log('pageView', title, url, path);
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line camelcase
    ma_url: url, // eslint-disable-line camelcase
    ma_path: path, // eslint-disable-line camelcase
  });
};
