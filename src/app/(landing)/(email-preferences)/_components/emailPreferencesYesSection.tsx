'use client';

import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { TelephoneFormPopup } from '../../(thank-you)/_components/telephoneFormPopup';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import EmailIcon from '@/components/siteLayout/icons/email.svg';
import { TelephoneLink } from '@/components/telephoneLink';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  emailAddress?: string;
  course?: CourseCode;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  leadId?: string;
  telephoneListId?: number;
  countryCode: string;
}

export const EmailPreferencesYesSection: FC<Props> = ({ heroSrc, mobileHeroSrc, leadId, telephoneListId, countryCode }) => {

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
                  <EmailIcon height="40" />
                </div>
                <h1 className="h4 mb-4 text-navy">You're officially back in the loop!</h1>
                <FormWrapper>
                  <p className="lead">Thanks for updating your preferences. We'll keep sending you makeup tips, student success stories, exclusive offers, and updates from QC Makeup Academy.
                    If you ever have questions about our courses or career training, our team is always happy to help.
                  </p>
                </FormWrapper>
                <TelephoneLink countryCode={countryCode} className="btn btn-primary" />
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
