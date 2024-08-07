import type { NextApiRequest, NextApiResponse } from 'next';

import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { getEnrollment } from '@/lib/fetch';
import { getIPAddress } from '@/lib/getIpAddress';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  console.log('handler');
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  if (typeof req.query.enrollmentId === 'undefined' || typeof req.query.enrollmentId !== 'string') {
    return res.status(400).send('enrollmentId required');
  }

  if (typeof req.query.code === 'undefined' || typeof req.query.code !== 'string') {
    return res.status(400).send('code required');
  }

  const id = parseInt(req.query.enrollmentId, 10);
  const code = req.query.code;
  const referrer = req.headers.referer;
  const clientIpAddress = getIPAddress(req);
  const clientUserAgent = req.headers['user-agent'];
  const fbc = req.cookies._fbc;
  const fbp = req.cookies._fbp;

  try {
    const enrollment = await getEnrollment(id, code);
    const response = await fbPostPurchase(enrollment, referrer, clientIpAddress, clientUserAgent, fbc, fbp);
    res.send(response);
  } catch (err) {
    if (err instanceof Error) {
      res.send(err.message);
    } else {
      res.send(err);
    }
  }
}
