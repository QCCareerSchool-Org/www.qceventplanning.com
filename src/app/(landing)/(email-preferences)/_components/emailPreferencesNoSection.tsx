import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { TelephoneFormPopup } from '../../(thank-you)/_components/telephoneFormPopup';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import EmailIcon from '@/components/siteLayout/icons/email.svg';
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

export const EmailPreferencesNoSection: FC<Props> = ({ heroSrc, mobileHeroSrc, leadId, telephoneListId, countryCode }) => {

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
                  <EmailIcon />
                </div>
                <h1 className="h4 mb-4 text-navy">No problem, we'll update your email preferences!</h1>
                <FormWrapper>
                  <p className="lead">Moving forward, you'll only receive information about relevant courses or offers when you engage with QC. From now on, we'll only reach out with specific course updates or offers when you're actively engaging with QC. <strong> Want to leave us for good?</strong> You can find the 'Unsubscribe' link at the bottom of your last email.
                  </p>
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
