import type { Result } from 'generic-result-type';
import { success } from 'generic-result-type';

import { postContact } from './contacts/sync/post';
import { postContactTags } from './contactTags/post';
import type { Enrollment } from '@/domain/enrollment';

const activeCampaignAccount = process.env.ACTIVE_CAMPAIGN_ACCOUNT;
if (!activeCampaignAccount) {
  throw Error('Environment variable ACTIVE_CAMPAIGN_ACCOUNT not found');
}

const apiToken = process.env.ACTIVE_CAMPAIGN_API_TOKEN;
if (!apiToken) {
  throw Error('Environment variable ACTIVE_CAMPAIGN_API_TOKEN not found');
}

export const baseUrl = `https://${activeCampaignAccount}.api-us1.com/api/3`;

export const addActiveCampaignStudent = async (enrollment: Enrollment): Promise<Result<bigint>> => {
  const contact = {
    email: enrollment.emailAddress,
    phone: enrollment.telephoneNumber,
    firstName: enrollment.firstName,
    lastName: enrollment.lastName,
  };

  const fields = {
    countryCode: enrollment.countryCode,
    ...(enrollment.provinceCode ? { provinceCode: enrollment.provinceCode } : undefined),
    city: enrollment.city,
  };

  const contactResult = await postContact(contact, fields);
  if (!contactResult.success) {
    return contactResult;
  }

  const contactTag = {
    contact: contactResult.value,
    tag: 37n, // Student: Event
  };

  const addTagResult = await postContactTags(contactTag);
  if (!addTagResult.success) {
    return addTagResult;
  }

  return success(contactResult.value);
};
