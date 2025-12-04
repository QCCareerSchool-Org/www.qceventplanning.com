import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { TelephoneFormPopup } from './telephoneFormPopup';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import LockIcon from '@/components/icons/q-lock.svg';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  course?: CourseCode;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  leadId?: string;
  emailAddress?: string;
  telephoneListId?: number;
  countryCode: string;
}

export const ThankYouSection: FC<Props> = ({ heroSrc, mobileHeroSrc, leadId, emailAddress, telephoneListId, countryCode }) => {

  const showTelephone = countryCode === 'CA' || countryCode === 'US';

  return (
    <section className="text-white">
      <BackgroundImage src={heroSrc} mobile={mobileHeroSrc ? { src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' } : undefined} priority />
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '2rem 0' }}>
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <LockIcon height="40" />
                </div>
                <h1 className="h4 mb-4 text-navy">Your Catalog Is Waiting in<br />Your Inbox!</h1>
                <FormWrapper>
                  <p className="lead">Congratulations—you've unlocked your catalog! We've sent your catalog along with a special offer to {emailAddress ? <strong>{emailAddress}</strong> : 'your inbox'}. Be sure to check your junk/spam folder and add us to your safe sender's list if you don't see it in the next few minutes!</p>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
      {telephoneListId && leadId && showTelephone && (
        <TelephoneFormPopup countryCode={countryCode} leadId={leadId} telephoneListId={telephoneListId} delay={3000} />
      )}
    </section>
  );
};
