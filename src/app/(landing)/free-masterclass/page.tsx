import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { Header } from '../header';
import styles from './page.module.scss';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { StatsSection } from '@/components/statsSection/statsSection';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Join the Free Masterclass',
  alternates: {
    canonical: '/free-masterclass',
  },
};

const brevoListId = 93;
const brevoEmailTemplateId = 2938;

const MasterClassRegistrationPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const { countryCode } = await getServerData(props.searchParams);

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  return (
    <div className={styles.freeCatalog}>
      <Header buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <HomeHeroImage />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Join the Free Masterclass!</h1>
                  <p>Find out how expert planner Lisa Forbes turned her business into a sought-after luxury brand booking $100k+ clients.</p>
                  <div className={styles.formWrapper}>
                    <BrevoForm
                      successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qceventplanning.com'}/thank-free-master-class`}
                      listId={brevoListId}
                      emailTemplateId={brevoEmailTemplateId}
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
      <StatsSection />
    </div>
  );
};

export default MasterClassRegistrationPage;
