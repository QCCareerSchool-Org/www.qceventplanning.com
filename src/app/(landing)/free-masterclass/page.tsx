import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from '../header';
import DeskLaptopImage from './_images/desk-laptop.jpg';
import HeroImage from './_images/hero.jpg';
import BarChartAltIcon from './_images/icons/bar-chart-alt.svg';
import BookBookmarkIcon from './_images/icons/book-bookmark.svg';
import BriefcaseIcon from './_images/icons/briefcase.svg';
import CertificationIcon from './_images/icons/certification.svg';
import DiamondIcon from './_images/icons/diamond.svg';
import BookIcon from './_images/icons/icon-book.svg';
import MoneyWithdrawIcon from './_images/icons/money-withdraw.svg';
import PaletteIcon from './_images/icons/palette.svg';
import ShieldAlt2Icon from './_images/icons/shield-alt-2.svg';
import ILEABgImage from './_images/ilea-bg.jpg';
import LisaProfileImage from './_images/lisa-profile.jpg';
import styles from './page.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import DownloadIcon from '@/components/download.svg';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Free Masterclass: How to Book $100K+ Luxury Event Clients',
  description: 'Ready to transition into the luxury event industry? Learn the exact branding and pricing strategies Lisa Forbes used to build an award-winning brand. Perfect for established and aspiring event planners.',
  alternates: {
    canonical: '/free-masterclass',
  },
};

const brevoListId = 93;
const brevoEmailTemplateId = 2938;
const testimonialIds = [ 'TE-0012', 'TE-0014', 'TE-0003' ];
const listIconWidth = 32;
const listIconHeight = 24;

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
      <section id="#top" className="text-white">
        <BackgroundImage src={HeroImage} priority />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first">
              <div className={`card bg-light ${styles.card}`}>
                <div className="card-body">
                  <div className="text-primary fw-bold mb-2">Free Masterclass</div>
                  <h1 className="h4 mb-3 text-navy">Profit Pivot: How to Attract & Book $100K+ Clients</h1>
                  <p>Learn directly from expert event planner <strong>Lisa Forbes</strong>, who turned her business into a sought-after luxury brand serving $100K+ clients. Now she'll show you how to do the same.</p>
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
                      buttonText="Get Instant Access"
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
          <div className="row justify-content-center g-5">
            <div className="col-12 col-md-8 col-lg-5 col-xl-6 order-2 order-lg-1">
              <Image src={LisaProfileImage} alt="Lisa Forbes" className="img-fluid rounded-5" />
            </div>
            <div className="col-12 col-lg-7 col-xl-6 order-1 order-lg-2">
              <div className="eyebrow text-primary mb-2">Meet Your Instructor</div>
              <h2 className="h3 mb-3 text-navy">Lisa Forbes</h2>
              <h3 className="h5 mb-3">From QC Graduate to Award-Winning Luxury Planner</h3>
              <p>Lisa Forbes, lead planner at Hitched Planning & Design, is a nationally recognized luxury event planner and QC Graduate. Now, with over 15 years of experience, she's partnered with QC Event School to show you exactly how she used her training to break into the luxury market and build a thriving career producing high-end events.</p>
              <ul className="list-unstyled mb-0">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-primary text-center" style={{ width: listIconWidth }}><BookIcon height={listIconHeight} /></div>
                    <div>
                      <h4 className="h6 mb-1">A QC Success Story</h4>
                      As a former student, Lisa knows how to turn QC's training into a profitable event business.
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-primary text-center" style={{ width: listIconWidth }}><DiamondIcon height={listIconHeight} /></div>
                    <div>
                      <h4 className="h6 mb-1">15 Years of Luxury Expertise</h4>
                      Lisa brings over a decade of experience managing everything from intimate ceremonies to extravagant luxury productions.
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-primary text-center" style={{ width: listIconWidth }}><CertificationIcon height={listIconHeight} /></div>
                    <div>
                      <h4 className="h6 mb-1">Trusted Industry Authority</h4>
                      Lisa is a nationally recognized, award-winning planner and a trusted mentor within the professional planning community.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-6 order-1">
              <h2 className="h3 mb-3 text-navy">In This 35-Minute Masterclass, You'll Get:</h2>
              <ul className="list-unstyled mb-0">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-body-tertiary text-center" style={{ width: listIconWidth }}><MoneyWithdrawIcon height={listIconHeight} /></div>
                    <div>
                      <h3 className="h6 mb-1">A Proven Path to $100K+ Event Budgets</h3>
                      Learn to position your planning business to attract high-net-worth clients and book larger, more profitable events.
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-body-tertiary text-center" style={{ width: listIconWidth }}><BookBookmarkIcon height={listIconHeight} /></div>
                    <div>
                      <h3 className="h6 mb-1">A Luxury Pricing Playbook</h3>
                      Gain the confidence to structure premium service packages that protect your margins and present your fees with clarity.
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="flex-shrink-0 text-body-tertiary text-center" style={{ width: listIconWidth }}><ShieldAlt2Icon height={listIconHeight} /></div>
                    <div>
                      <h3 className="h6 mb-1">Insider Strategies for Elite Clients &amp; Vendors</h3>
                      Build instant trust with affluent clientele, and partner with top-tier vendors who match your standards.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-8 col-lg-6 order-2">
              <Image src={DeskLaptopImage} alt="" className="img-fluid rounded-5" />
            </div>
          </div>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
      <ILEASection backgroundImage={ILEABgImage} leftAligned />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-10">
              <h2 className="h3 mb-3 text-navy">Is this the Profit Pivot Masterclass Right for You?</h2>
              <p className="mb-0">This 35-minute masterclass is for event planners ready to grow a profitable, high-end business. You're in the right place, if you're:</p>
            </div>
          </div>
          <div className="row justify-content-center g-5 mb-5">
            <div className="col-12 col-lg-4">
              <p className={`${styles.pivotIcon} mb-3`}><BriefcaseIcon height="48" /></p>
              <h3 className="h6 mb-1">An Established Planner</h3>
              You have a solid event business and are ready to grow and command higher fees.
            </div>
            <div className="col-12 col-lg-4">
              <p className={`${styles.pivotIcon} mb-3`}><BarChartAltIcon height="48" /></p>
              <h3 className="h6 mb-1">An Aspiring Professional</h3>
              You're just starting out and want to build a profitable, high-end brand from day one.
            </div>
            <div className="col-12 col-lg-4">
              <p className={`${styles.pivotIcon} mb-3`}><PaletteIcon height="48" /></p>
              <h3 className="h6 mb-1">A Creative Upskiller</h3>
              You have a talent for planning and an eye for luxury, but you struggle to communicate your value and charge the fees your work deserves.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">
              <div className={`${styles.stageBox} text-white rounded-5 py-5 px-s`}>
                <h3 className="h4 mb-4">Whatever stage you're at, you'll walk away with a clear roadmap to start booking $100K+ events.</h3>
                <p className={`${styles.stageBoxText} mb-5 mx-auto`}>Don't leave your profit to chance. Join Lisa Forbes and learn how to claim your space in the luxury industry.</p>
                <p className="mb-5"><Link href="#top" className="btn btn-primary btn-lg">Watch the Masterclass Now</Link></p>
                <div className="d-flex gap-2 flex-column flex-lg-row justify-content-between"><strong>100% Free</strong> <span className="d-none d-lg-inline">|</span> <strong>Instant Access</strong> <span className="d-none d-lg-inline">|</span> <strong>No Credit Card Required</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterClassRegistrationPage;
