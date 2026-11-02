/* eslint-disable custom/no-window-outside-effects */
import { Big } from 'big.js';

import { normalizeEmailAddress } from './hash';
import type { Enrollment } from '@/domain/enrollment';

export interface LoadParams {
  em?: string;
}

interface LineItem {
  product_id: string;
  product_name: string;
  product_price: number;
  product_quantity: number;
}

interface LeadParams {
  event_id?: string;
}

interface CheckoutParams {
  event_id: string;
  order_id: string;
  value: number;
  currency: string;
  order_quantity: number;
  line_items: LineItem[];
}

interface Pintrk {
  (action: 'load', tagId: string, params?: LoadParams): void;
  (action: 'track', type: 'lead', params?: LeadParams): void;
  (action: 'track', type: 'checkout', params: CheckoutParams): void;
}

declare global {
  interface Window {
    pintrk?: Pintrk;
  }
}

const pinterestId = process.env.NEXT_PUBLIC_PINTEREST_ID;

// reload the tag with the email address for enhanced match
const pintrkEnhancedMatch = (emailAddress: string): void => {
  if (pinterestId) {
    window.pintrk?.('load', pinterestId, { em: normalizeEmailAddress(emailAddress) });
  }
};

export const pintrkLead = (eventId?: string, emailAddress?: string): void => {
  if (emailAddress) {
    pintrkEnhancedMatch(emailAddress);
  }
  if (typeof eventId !== 'undefined') {
    // log the conversion with a specfic event_id
    window.pintrk?.('track', 'lead', { event_id: eventId }); // eslint-disable-line camelcase
    return;
  }
  window.pintrk?.('track', 'lead');
};

export const pintrkSale = (enrollment: Enrollment): void => {
  pintrkEnhancedMatch(enrollment.emailAddress);
  /* eslint-disable camelcase */
  window.pintrk?.('track', 'checkout', {
    event_id: enrollment.id.toString(),
    order_id: enrollment.id.toString(),
    value: enrollment.cost,
    currency: enrollment.currencyCode,
    order_quantity: enrollment.courses.length,
    line_items: enrollment.courses.map(c => ({
      product_id: c.code,
      product_name: c.name,
      product_price: parseFloat(Big(c.baseCost).minus(c.planDiscount).minus(c.discount).toFixed(2)),
      product_quantity: 1,
    })),
  });
  /* eslint-enable camelcase */
};
