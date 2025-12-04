import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { BottomSection } from '../bottomSection';
import { CertificationSection } from '../free-catalog//certificationSection';
import { JoinQCSection } from '../free-catalog//joinQCSection';
import { AboutSection } from '../free-catalog/aboutSection';
import { Header } from '../header';
import ChartIcon from './chart.svg';
import HeroImage from './hero.jpg';
import styles from './page.module.scss';
import SAFLogo from './saf-logo.png';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { Overlay } from '@/components/overlay';
import { PromoSection } from '@/components/promoSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { DarcieGarcia } from '@/components/tutorImages/darcieGarcia';
import { ReneeTucci } from '@/components/tutorImages/reneeTucci';
import type { CourseCode } from '@/domain/courseCode';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Free Floral Design Course Catalog',
  alternates: {
    canonical: '/free-floral-design-course-catalog',
  },
};

const brevoListId = 12;
const brevoEmailTemplateId = 1998;
const courseCodes: CourseCode[] = [ 'fd' ];
const testimonialIds = [ 'TE-0020', 'TE-0021', 'TE-0012', 'TE-0022', 'TE-0004', 'TE-0003' ];

const FreeFloralDesignCatalogPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const { countryCode } = await getData();
  const date = new Date().getTime();
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
      <Header logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} />
      <section className="text-white">
        <BackgroundImage src={HeroImage} />
        <Overlay backgroundColor="rgba(0,0,0,0.4)" className="d-md-none" />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <h1 className="h4 mb-3 text-navy">Get a Free Floral Design Course Catalog</h1>
                  <div className={styles.formWrapper}>
                    <BrevoForm
                      successLocation={`${process.env.HOST ?? 'https://www.qceventplanning.com'}/thank-you-course-catalog`}
                      listId={brevoListId}
                      emailTemplateId={brevoEmailTemplateId}
                      gclid={gclid}
                      msclkid={msclkid}
                      utmSource={utmSource}
                      utmMedium={utmMedium}
                      utmCampaign={utmCampaign}
                      utmContent={utmContent}
                      utmTerm={utmTerm}
                      courseCodes={courseCodes}
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
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <ChartIcon className="mb-4" />
              <h2 className="mb-3">Join a Thriving Industry!</h2>
              <p className="mb-4"><strong>Floral design is in full bloom!</strong> With a market worth over <strong>$35 billion</strong>*, now's the perfect time to turn your creativity into a thriving career.</p>
              <p className="small mb-0">* https://www.marketsandmarkets.com/Market-Reports/cut-flowers-market-18187231.html</p>
            </div>
          </div>
        </div>
      </section>
      <JoinQCSection
        heading="Ready to Master Floral Design with QC?"
        subheading="QC Event School's comprehensive Floral Design course provides you with:"
        feedbackText="Receive personalized feedback from a professional floral designer who's dedicated to your success"
        trainingText="Master floral design and business skills through in-depth videos and interactive lessons"
        exercisesText="Build hands-on skills by practicing real floral arrangements and design techniques"
      />
      <section>
        <div className="container text-center">
          <h2>Meet Your Educational Team</h2>
          <p className="mb-5">With QC's Floral Design course, you'll train under seasoned professionals:</p>
          <div className="row justify-content-center g-5 g-lg-4">
            <div className="col-12 col-lg-4" style={{ marginRight: '30px' }}>
              <div className="d-flex justify-content-center mb-3">
                <ReneeTucci size={128} />
              </div>
              <h3 className="h6 mb-4">Renee Tucci<br /><span className="fw-normal">Lead Educator</span></h3>
              With over 20 years of experience, Renee Tucci is a highly respected leader in the industry and the current <strong>President of the American Institute of Floral Designers (AIFD)</strong>. Renee designed QC's Floral Design course to seamlessly blend floral design theory with practical, real-world skills—ensuring students are fully prepared for success.
            </div>
            <div className="col-12 col-lg-4">
              <div className="d-flex justify-content-center mb-3">
                <DarcieGarcia size={128} />
              </div>
              <h3 className="h6 mb-4">Darcie Garcia<br /><span className="fw-normal">Course Mentor</span></h3>
              Darcie Garcia, owner of The Florapest Raleigh and AIFD-accredited educator, brings 32 years of floral expertise. She inspires creativity and confidence while providing personalized feedback on every assignment to help students build strong skills and succeed.
            </div>
          </div>
        </div>
      </section>
      <CertificationSection courseCode="fd" />
      {countryCode === 'US' && (
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="d-flex flex-column align-items-center text-center mt-5">
                  <div className="mb-3">
                    <Image src={SAFLogo} alt="SAF" style={{ height: 100, width: 'auto' }} />
                  </div>
                  <p>QC is a proud partner of the Society of American Florists, orffering Floral Design students exclusive discounts and professional opportunities through this prestigious organization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <AboutSection className="bg-light" />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <BottomSection>
        <h2 className="mb-3">Start Your Floral Design Career Today!</h2>
        <p className="lead mb-5">Request a free course preview today to learn more about how you can become a professional Floral Designer with QC's online training! The preview includes a course curriculum, tuition information and your career outlook.</p>
        <Link href="#" className="btn btn-primary btn-lg">Get Your Free Catalog</Link>
      </BottomSection>
    </div>
  );
};

export default FreeFloralDesignCatalogPage;
