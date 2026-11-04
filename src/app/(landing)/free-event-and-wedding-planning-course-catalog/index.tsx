import type { Metadata } from 'next';
import { headers } from 'next/headers';
import type { FC } from 'react';

import { BottomSection } from '../bottomSection';
import styles from './index.module.scss';
import { AboutSection } from '../free-catalog/aboutSection';
import { CertificationSection } from '../free-catalog/certificationSection';
import { IndustrySection } from '../free-catalog/industrySection';
import { JoinQCSection } from '../free-catalog/joinQCSection';
import { Header } from '../header';
import { ActiveCampaginForm } from '@/components/activeCampaignForm';
import DownloadIcon from '@/components/download.svg';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { PromoSection } from '@/components/promoSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { getParam } from '@/lib/getParam';
import type { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

interface Props {
  telephone: boolean;
  searchParams: Record<string, string | string[] | undefined>;
  data: Awaited<ReturnType<typeof getServerData>>;
}

export const FreeEventAndWeddingPlanningCatalog: FC<Props> = async props => {
  const { countryCode, date } = props.data;
  const gclid = getParam(props.searchParams.gclid);
  const msclkid = getParam(props.searchParams.msclkid);
  const utmSource = getParam(props.searchParams.utm_source);
  const utmMedium = getParam(props.searchParams.utm_medium);
  const utmCampaign = getParam(props.searchParams.utm_campaign);
  const utmContent = getParam(props.searchParams.utm_content);
  const utmTerm = getParam(props.searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  return (
    <div className={styles.freeCatalog}>
      <Header buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white" id="top">
        <HomeHeroImage />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
                  <div className={styles.formWrapper}>
                    <ActiveCampaginForm
                      successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qceventplanning.com'}/thank-you-course-catalog`}
                      requiredIds={[ 32n ]}
                      optionalIds={[ 25n ]}
                      gclid={gclid}
                      msclkid={msclkid}
                      utmSource={utmSource}
                      utmMedium={utmMedium}
                      utmCampaign={utmCampaign}
                      utmContent={utmContent}
                      utmTerm={utmTerm}
                      placeholders
                      referrer={referrer}
                      countryCode={countryCode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PromoSection date={date} countryCode={countryCode} />
      <IndustrySection />
      <JoinQCSection />
      <TestimonialSection id="TE-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
      </BottomSection>
    </div>
  );
};
