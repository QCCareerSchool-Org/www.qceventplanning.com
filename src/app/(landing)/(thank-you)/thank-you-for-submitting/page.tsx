import type { Metadata } from 'next';

import { getThankyouData } from '..';
import HeroLgImage from './event-hero-basic.jpg';
import { Header } from '../../header';
import { BackgroundImage } from '@/components/backgroundImage';
import { FormCard } from '@/components/formCard';
import { FormWrapper } from '@/components/formWrapper';
import HeroSmImage from '@/components/homeHeroImage/hero-small.jpg';
import QCIcon from '@/components/icons/qc-dark.svg';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/thank-you-for-submitting' },
  robots: { index: false },
};

const ThankYouForSubmittingPage: PageComponent = async props => {
  const { lead, jwt, recent } = await getThankyouData(props);

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qceventplanning.com" />}
      {lead && recent && (
        <LeadProcessing
          emailAddress={lead.emailAddress}
          telephoneNumber={lead.telephoneNumber}
          city={lead.city}
          countryCode={lead.countryCode}
          provinceCode={lead.provinceCode}
          firstName={lead.firstName}
          lastName={lead.lastName}
          leadId={lead.leadId}
        />
      )}
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref="https://enroll.qceventplanning.com" />
      <section className="text-white">
        <BackgroundImage src={HeroLgImage} mobile={{ src: HeroSmImage, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-md-7 col-lg-6 col-xl-5 order-lg-first text-center">
              <FormCard>
                <div style={{ margin: '2rem 0' }}>
                  <div className="text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height: 80, borderRadius: 50, border: '1px solid #E5E7EB', background: 'white', margin: '0 auto 2rem' }}>
                    <QCIcon height="40" />
                  </div>
                  <h1 className="h4 mb-4 text-navy">Thank You!</h1>
                  <FormWrapper>
                    <p className="lead">You will receive a follow-up email in one day! Be sure to check your junk/spam folder and add us to your safe sender's list if you don't see it in the next day or two!</p>
                  </FormWrapper>
                </div>
              </FormCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouForSubmittingPage;
