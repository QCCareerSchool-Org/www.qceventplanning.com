import type { FC } from 'react';

import CheckIcon from '@/components/check.svg';
import { GetStartedSection } from '@/components/getStartedSection';

export const CTASection: FC = () => (
  <GetStartedSection
    title="Ready to Launch Your Event Planning Career?"
    buttonText={<><CheckIcon height="20" className="me-2" style={{ position: 'relative', top: -1 }} /><span className="text-white">Watch the Webinar</span></>}
    buttonHref="#"
  />
);
