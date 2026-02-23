import 'server-only';

import { BrevoClient } from '@getbrevo/brevo';

const apiKey = process.env.BREVO_API_KEY ?? '';

const brevo = new BrevoClient({ apiKey });

interface Attributes {
  STATUS_EVENT_LEAD?: boolean;
  STATUS_EVENT_STUDENT?: boolean;
}

export const createBrevoContact = async (emailAddress: string, firstName?: string, lastName?: string, countryCode?: string, provinceCode?: string | null, attributes?: Attributes, listIds?: number[]): Promise<boolean> => {
  console.log('adding brevo contact', emailAddress);

  const body = {
    email: emailAddress,
    listIds,
    updateEnabled: true,
    attributes: {
      ...attributes,
    },
  };

  if (typeof firstName !== 'undefined') {
    (body.attributes as Record<string, unknown>).FIRSTNAME = firstName;
  }
  if (typeof lastName !== 'undefined') {
    (body.attributes as Record<string, unknown>).LASTNAME = lastName;
  }
  if (typeof countryCode !== 'undefined') {
    (body.attributes as Record<string, unknown>).COUNTRY_CODE = countryCode.toLocaleUpperCase();
  }
  if (typeof provinceCode !== 'undefined') {
    (body.attributes as Record<string, unknown>).PROVINCE_CODE = provinceCode === null ? '' : provinceCode.toLocaleUpperCase();
  }

  const createContactResponse = await brevo.contacts.createContact(body);

  return typeof createContactResponse.id !== 'undefined';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendBrevoEmail = async (templateId: number, emailAddress: string, firstName?: string, lastName?: string): Promise<void> => {
  console.log('sending brevo email', emailAddress);

  await brevo.transactionalEmails.sendTransacEmail({
    to: firstName ? [ { email: emailAddress, name: firstName } ] : [ { email: emailAddress } ],
    templateId,
    // params: { name: firstName, surname: lastName },
    // headers: {
    //   'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
    // },
  });
};
