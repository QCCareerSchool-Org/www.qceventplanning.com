import type { Metadata } from 'next';
import Image from 'next/image';

import { CertificationSection } from './certificationSection';
import HeroLgImage from './hero-large.jpg';
import HeroSmImage from './hero-small.jpg';
import { IndustrySection } from './industrySection';
import { JoinQCSection } from './joinQCSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BrochureForm } from '@/components/brochureForm';
import { TestimonialSection } from '@/components/testimonialSection';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Event School',
};

const FreeCatalogPage: PageComponent = () => {
  const { testGroup, countryCode, provinceCode } = getData();
  return (
    <div className={styles.freeCatalog}>
      <section className="text-white">
        <Image src={HeroLgImage} alt="" fill placeholder="blur" className="d-none d-md-block" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
        <Image src={HeroSmImage} alt="" fill placeholder="blur" className="d-md-none" style={{ objectFit: 'cover' }} />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h3 mb-3 text-navy">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
                  <div className={styles.formWrapper}>
                    <BrochureForm
                      action="https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7"
                      testGroup={testGroup}
                      countryCode={countryCode}
                      provinceCode={provinceCode}
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
    </div>
  );
};

export default FreeCatalogPage;
