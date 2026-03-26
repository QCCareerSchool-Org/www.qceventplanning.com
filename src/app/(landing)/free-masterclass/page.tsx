import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { Header } from '../header';
import styles from './page.module.scss';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { ILEASection } from '@/components/ileaSection';
import { StatsSection } from '@/components/statsSection/statsSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
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
const testimonialIds = [ 'TE-0012', 'TE-0014', 'TE-0003' ];

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
                      successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qceventplanning.com'}/thank-you-free-masterclass`}
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
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="h3 mb-2 text-navy">Meet Your Instructor: Lisa Forbes</h2>
              <h3 className="h5 mb-3">From QC Graduate to Award-Winning Luxury Planner</h3>
              <p>Lisa Forbes, founder of White Aspen Weddings, is a nationally recognized luxury event planner and QC Graduate. Now, with over 15 years of experience, she's partnered with QC Event School to show you exactly how she used her training to break into the luxury market and build a thriving career producing high-end events.</p>
              <ul className="mb-0">
                <li>
                  <h4 className="h6 mb-1">A QC Success Story</h4>
                  As a former student, Lisa knows how to turn QC's training into a profitable event business.
                </li>
                <li className="mt-3">
                  <h4 className="h6 mb-1">15 Years of Luxury Expertise</h4>
                  She brings over a decade of experience managing everything from intimate ceremonies to extravagant, large-scale luxury productions.
                </li>
                <li className="mt-3">
                  <h4 className="h6 mb-1">Trusted Industry Authority</h4>
                  Lisa is a nationally recognized, award-winning planner and a trusted mentor within the professional planning community.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="h3 mb-3 text-navy">In This 45-Minute Masterclass, You'll Walk Away With:</h2>
              <ul className="mb-0">
                <li>
                  <h3 className="h6 mb-1">A Proven Path to $100K+ Event Budgets</h3>
                  Learn how to position your planning business to attract high-net-worth clients and book larger, more profitable events.
                </li>
                <li className="mt-3">
                  <h3 className="h6 mb-1">A Luxury Pricing Playbook</h3>
                  Structure premium service packages, protect your margins, and present your fees with clarity and confidence.
                </li>
                <li className="mt-3">
                  <h3 className="h6 mb-1">Insider Strategies for Elite Clients &amp; Vendors</h3>
                  Ask the right discovery questions, build instant trust with affluent clientele, and partner with top-tier vendors who match your standards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
      <ILEASection />
      <StatsSection />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="h3 mb-3 text-navy">Is this the Profit Pivot Masterclass Right for You?</h2>
              <p>This 45-minute masterclass is for event planners ready to grow a profitable, high-end business. Whether you're:</p>
              <ul>
                <li>
                  <h3 className="h6 mb-1">The Established Planner</h3>
                  You have a solid event business and are ready to grow and command higher fees.
                </li>
                <li className="mt-3">
                  <h3 className="h6 mb-1">The Aspiring Professional</h3>
                  You're just starting out and want to do it right - you want to build a profitable, high-end brand from day one.
                </li>
                <li className="mt-3">
                  <h3 className="h6 mb-1">The Creative Upskiller</h3>
                  You have a talent for planning and an eye for luxury, but you struggle to communicate your value and charge the fees your work deserves.
                </li>
              </ul>
              <p>Whatever stage you're at, you'll walk away with a clear roadmap and the confidence to start booking $100K+ events.</p>
              <p>Don't leave your profit to chance. Join Lisa Forbes and learn how to claim your space in the luxury industry.</p>
              <p className="mb-3"><button type="button" className="btn btn-primary btn-lg">Watch the Masterclass Now</button></p>
              <p className="mb-0"><strong>100% Free</strong> &nbsp; <strong>Instant Access</strong> &nbsp; <strong>No Credit Card Required</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterClassRegistrationPage;
