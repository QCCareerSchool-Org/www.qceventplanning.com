import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import LockIcon from '@/components/icons/q-lock.svg';
import type { CourseCode } from '@/domain/courseCode';

type Props = {
  course?: CourseCode;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  emailAddress?: string;
};

export const ThankYouSection: FC<Props> = ({ heroSrc, mobileHeroSrc, emailAddress }) => {
  return (
    <section className="text-white">
      {mobileHeroSrc
        ? <BackgroundImage src={heroSrc} mobile={{ src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        : <BackgroundImage src={heroSrc} priority />
      }
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '3rem 0' }}>
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <LockIcon height="50" />
                </div>
                <h1 className="h4 mb-4 text-navy">Your Catalog Is Waiting in Your Inbox!</h1>
                <FormWrapper>
                  <p className="lead mb-4">Congratulations—you've unlocked your catalog! We've sent your catalog along with a special offer to {emailAddress ? <strong>{emailAddress}</strong> : 'your inbox'}. Be sure to check your junk/spam folder and add us to your safe sender's list if you don't see it in the next few minutes!</p>
                </FormWrapper>
              </div>
            </FormCard>
          </div>
        </div>
      </div>
    </section>
  );
};
