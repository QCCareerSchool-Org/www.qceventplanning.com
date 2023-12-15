import type { NextApiRequest, NextApiResponse } from 'next';

import { addLead } from '@/lib/leads';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const params: string[] = [];
  const body: unknown = req.body;
  if (body !== null && typeof body === 'object') {
    for (const key in body) {
      if (Object.hasOwn(body, key)) {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(body[key as keyof typeof body])}`);
      }
    }
    const emailAddress = 'emailAddress' in body && typeof body.emailAddress === 'string' ? body.emailAddress : null;
    const testGroupString = 'testGroup' in body && typeof body.testGroup === 'string' && body.testGroup.length > 0 ? body.testGroup : null;
    const testGroup = testGroupString === null ? null : parseInt(testGroupString, 10);
    const marketing = 'marketing' in body && body.marketing !== null && typeof body.marketing === 'object' ? body.marketing : undefined;
    if (emailAddress) {
      await addLead({
        school: 'QC Event School',
        emailAddress,
        firstName: 'firstName' in body && typeof body.firstName === 'string' && body.firstName.length > 0 ? body.firstName : null,
        lastName: 'lastName' in body && typeof body.lastName === 'string' && body.lastName.length > 0 ? body.lastName : null,
        telephoneNumber: 'telephoneNumber' in body && typeof body.telephoneNumber === 'string' && body.telephoneNumber.length > 0 ? body.telephoneNumber : null,
        emailOptIn: 'emailOptIn' in body && typeof body.emailOptIn === 'string' ? body.emailOptIn.toUpperCase() === 'YES' : null,
        smsOptIn: 'smsOptIn' in body && typeof body.smsOptIn === 'string' ? body.smsOptIn.toUpperCase() === 'YES' : null,
        countryCode: 'countryCode' in body && typeof body.countryCode === 'string' && body.countryCode.length > 0 ? body.countryCode : null,
        provinceCode: 'provinceCode' in body && typeof body.provinceCode === 'string' && body.provinceCode.length > 0 ? body.provinceCode : null,
        testGroup: testGroup === null || isNaN(testGroup) ? null : testGroup,
        gclid: 'gclid' in body && typeof body.gclid === 'string' && body.gclid.length > 0 ? body.gclid : null,
        msclkid: 'msclkid' in body && typeof body.msclkid === 'string' && body.msclkid.length > 0 ? body.msclkid : null,
        marketing: marketing ? {
          source: 'source' in marketing && typeof marketing.source === 'string' && marketing.source.length > 0 ? marketing.source : null,
          medium: 'medium' in marketing && typeof marketing.medium === 'string' && marketing.medium.length > 0 ? marketing.medium : null,
          campaign: 'campaign' in marketing && typeof marketing.campaign === 'string' && marketing.campaign.length > 0 ? marketing.campaign : null,
          content: 'content' in marketing && typeof marketing.content === 'string' && marketing.content.length > 0 ? marketing.content : null,
          term: 'term' in marketing && typeof marketing.term === 'string' && marketing.term.length > 0 ? marketing.term : null,
        } : undefined,
        courses: 'courses' in body && Array.isArray(body.courses) && body.courses.every(c => typeof c === 'string') ? body.courses : undefined,
      });
    }
  }

  res.redirect(301, `/thank-you-course-catalog?${params.join('&')}`);
}
