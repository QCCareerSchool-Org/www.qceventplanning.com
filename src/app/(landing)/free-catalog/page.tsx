import type { Metadata } from 'next';

import Link from 'next/link';
import { BottomSection } from '../bottomSection';
import { Header } from '../header';
import { AboutSection } from './aboutSection';
import { CertificationSection } from './certificationSection';
import { IndustrySection } from './industrySection';
import { JoinQCSection } from './joinQCSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { TestimonialSection } from '@/components/testimonialSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Event School',
};

const brevoListId = 2;
const brevoEmailTemplateId = 32;

const FreeCatalogPage: PageComponent = ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);

  return (
    <div className={`${styles.freeCatalog}`}>
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <HomeHeroImage />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
                  <div className={styles.formWrapper}>
                    <BrevoForm
                      successLocation={`${process.env.DOMAIN}/thank-you-course-catalog`}
                      listId={brevoListId}
                      emailTemplateId={brevoEmailTemplateId}
                      countryCode={countryCode}
                      provinceCode={provinceCode}
                      gclid={gclid}
                      msclkid={msclkid}
                      utmSource={utmSource}
                      utmMedium={utmMedium}
                      utmCampaign={utmCampaign}
                      utmContent={utmContent}
                      utmTerm={utmTerm}
                      placeholders
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustrySection />
      <JoinQCSection />
      <TestimonialSection id="TE-0006" />
      <CertificationSection />
      <AboutSection />
      <BottomSection>
        <h2 className="mb-5">Get Started with a Free Course Catalog</h2>
        <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
      </BottomSection>
    </div>
  );
};

export default FreeCatalogPage;
