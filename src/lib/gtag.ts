declare global {
  interface Window {
    gtag?: (command: 'config', id: string, options: { page_path: string }) => void;
  }
}

export const pageView = (id: string, url: string): void => {
  window.gtag?.('config', id, {
    // eslint-disable-next-line camelcase
    page_path: url,
  });
};
