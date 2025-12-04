import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { TelephoneFormPopup } from '../telephoneFormPopup';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import DownloadIcon from '@/components/icons/download.svg';
import LockIcon from '@/components/icons/q-lock.svg';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  countryCode: string;
  course?: CourseCode;
  heroSrc: StaticImageData;
  mobileHeroSrc?: StaticImageData;
  leadId?: string;
  telephoneListId?: number;
}

export const DownloadSection: FC<Props> = ({ countryCode, course, heroSrc, mobileHeroSrc, leadId, telephoneListId }) => {
  const downloadUrl = course === 'fd'
    ? '/floral.pdf'
    : '/catalog.pdf';

  const showTelephone = countryCode === 'CA' || countryCode === 'US';

  return (
    <section id="download" className="text-white">
      {mobileHeroSrc
        ? <BackgroundImage src={heroSrc} mobile={{ src: mobileHeroSrc, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        : <BackgroundImage src={heroSrc} priority />
      }
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
            <FormCard>
              <div style={{ margin: '2.75rem 0' }}>
                <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                  <LockIcon height="50" />
                </div>
                <h1 className="h4 mb-4 text-navy">Catalog Unlocked!</h1>
                <FormWrapper>
                  <p className="lead mb-4">Your catalog is ready! Download your copy and start exploring course details, career paths, and exclusive student benefits.</p>
                  <a href={downloadUrl}><button className="btn btn-primary"><DownloadIcon height="16" style={{ position: 'relative', top: -2, marginRight: '0.5rem' }} /> Download Catalog Now</button></a>
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
