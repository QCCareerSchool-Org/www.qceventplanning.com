import type { NextApiRequest, NextApiResponse } from 'next';

import { postLead } from '@/lib/facebookConversionAPI';
import { getIPAddress } from '@/lib/getIpAddress';
import { addLead } from '@/lib/leads';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const clientIpAddress = getIPAddress(req);
  const clientUserAgent = req.headers['user-agent'];
  const fbc = req.cookies._fbc;
  const fbp = req.cookies._fbp;

  const params: string[] = [];
  const body: unknown = req.body;
  if (body !== null && typeof body === 'object') {
    for (const key in body) {
      if (Object.hasOwn(body, key)) {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(body[key as keyof typeof body])}`);
      }
    }
    const emailAddress = 'emailAddress' in body && typeof body.emailAddress === 'string' ? body.emailAddress : null;
    const firstName = 'firstName' in body && typeof body.firstName === 'string' && body.firstName.length > 0 ? body.firstName : null;
    const lastName = 'lastName' in body && typeof body.lastName === 'string' && body.lastName.length > 0 ? body.lastName : null;
    const countryCode = 'countryCode' in body && typeof body.countryCode === 'string' && body.countryCode.length > 0 ? body.countryCode : null;
    const testGroupString = 'testGroup' in body && typeof body.testGroup === 'string' && body.testGroup.length > 0 ? body.testGroup : null;
    const testGroup = testGroupString === null ? null : parseInt(testGroupString, 10);
    const marketing = 'marketing' in body && body.marketing !== null && typeof body.marketing === 'object' ? body.marketing : undefined;
    if (emailAddress) {
      const payload = {
        school: 'QC Event School',
        emailAddress,
        firstName,
        lastName,
        telephoneNumber: 'telephoneNumber' in body && typeof body.telephoneNumber === 'string' && body.telephoneNumber.length > 0 ? body.telephoneNumber : null,
        emailOptIn: 'emailOptIn' in body && typeof body.emailOptIn === 'string' ? body.emailOptIn.toUpperCase() === 'YES' : null,
        smsOptIn: 'smsOptIn' in body && typeof body.smsOptIn === 'string' ? body.smsOptIn.toUpperCase() === 'YES' : null,
        countryCode,
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
      };
      try {
        const response = await addLead(payload);
        params.push(`leadId=${response.leadId}`);
        await postLead(response.leadId, new Date(), emailAddress, firstName ?? undefined, lastName ?? undefined, countryCode ?? undefined, undefined, clientIpAddress, clientUserAgent, fbc, fbp);
      } catch (err) {
        console.error(err);
      }
    }
  }

  const destination = typeof req.query.destination === 'string'
    ? req.query.destination
    : '/thank-you-course-catalog';

  res.redirect(301, `${destination}?${params.join('&')}`);
}
