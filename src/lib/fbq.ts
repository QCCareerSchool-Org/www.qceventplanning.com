import type { Enrollment } from '@/domain/enrollment';

type FBQ = {
  (action: 'track', type: 'PageView' | 'Lead'): void;
  (action: 'track', type: 'Purchase', params: { value: number; currency: string }): void;
  (action: 'trackCustom', type: 'VirtualPageView', params: { url: string }): void;
};

declare global {
  interface Window {
    fbq?: FBQ;
  }
}

// log the page view with a specific URL
export const fbqPageview = (url?: string): void => {
  if (typeof url !== 'undefined') {
    window.fbq?.('trackCustom', 'VirtualPageView', { url });
  } else {
    window.fbq?.('track', 'PageView');
  }
};

// log the conversion
export const fbqLead = (): void => {
  window.fbq?.('track', 'Lead');
};

// log a sale
export const fbqSale = (enrollment: Enrollment): void => {
  window.fbq?.('track', 'Purchase', { value: enrollment.cost, currency: enrollment.currencyCode });
};
