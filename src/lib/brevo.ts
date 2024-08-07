declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
      identify: (emailAddress: string) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line camelcase
    ma_url: url, // eslint-disable-line camelcase
    ma_path: path, // eslint-disable-line camelcase
  });
};

export const brevoIdentify = (emailAddress: string): void => {
  window.sendinblue?.identify(emailAddress);
};
