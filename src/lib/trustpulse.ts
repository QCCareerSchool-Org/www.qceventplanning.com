import type { Enrollment } from '@/domain/enrollment';

const enrollmentUrls = {
  ep: 'https://hooks.zapier.com/hooks/catch/1909320/35cln6b',
  wp: 'https://hooks.zapier.com/hooks/catch/1909320/35cljna',
  ce: 'https://hooks.zapier.com/hooks/catch/1909320/35cey8k',
  default: 'https://hooks.zapier.com/hooks/catch/1909320/35cl08g',
};

const getUrl = (enrollment: Enrollment): string => {
  return enrollment.courses.some(c => c.code.toUpperCase() === 'EP')
    ? enrollmentUrls.ep
    : enrollment.courses.some(c => c.code.toUpperCase() === 'WP')
      ? enrollmentUrls.wp
      : enrollment.courses.some(c => c.code.toUpperCase() === 'CE')
        ? enrollmentUrls.ce
        : enrollmentUrls.default;
};

export const trustPulseLead = async (payload: Payload): Promise<void> => {
  await trustPulse(payload, 'https://hooks.zapier.com/hooks/catch/1909320/35clg2t');
};

export const trustPulseEnrollment = async (enrollment: Enrollment, ipAddress: string | null): Promise<void> => {
  const payload: Payload = {
    firstName: enrollment.firstName,
    emailAddress: enrollment.emailAddress,
    postalCode: enrollment.postalCode,
    ipAddress,
  };

  const url = getUrl(enrollment);

  await trustPulse(payload, url);
};

type Payload = {
  firstName: string | null;
  emailAddress: string | null;
  postalCode: string | null;
  ipAddress: string | null;
};

const trustPulse = async (payload: Payload, url: string): Promise<void> => {
  const response = await fetch(url, {
    method: 'post',
    // headers: { 'Content-Type': 'application/json' }, // CORS doesn't allow Content-Type header
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw Error(response.statusText);
  }

  await response.json();
};
