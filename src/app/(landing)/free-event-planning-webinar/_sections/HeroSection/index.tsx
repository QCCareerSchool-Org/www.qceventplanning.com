import Image from 'next/image';
import type { FC } from 'react';

import HeroLgImage from './hero-large-2.jpg';
import HeroSmImage from './hero-small-2.jpg';
import ChartIcon from './icon-chart.svg';
import styles from './index.module.scss';
import { BrevoForm } from '@/components/brevoForm';
import CheckIcon from '@/components/check.svg';

type Props = {
  countryCode: string;
  provinceCode: string | null;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

const brevoListId = 10;
const brevoEmailTemplateId = 35;

export const HeroSection: FC<Props> = props => {
  return (
    <section style={{ backgroundColor: '#e3dfda' }}>
      <Image src={HeroLgImage} alt="" priority fill placeholder="blur" className="d-none d-md-block" style={{ objectFit: 'cover', objectPosition: '0% 50%' }} />
      <Image src={HeroSmImage} alt="" priority fill sizes="100%" placeholder="blur" className="d-md-none" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      <div className={styles.overlay} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <p className={`lead text-primary fw-bold text-uppercase mb-1 d-none d-md-block`}>Free Webinar <span style={{ position: 'relative', top: -2 }}><ChartIcon height={18} /></span></p>
                <h1 className={`h4 ${styles.cardHeader} mb-3 mb-md-2`}>Ready to Launch Your Event Planning Career?</h1>
                <p className="d-none d-md-block">Get insider tips from QC's renowned event planning expert, Lisa Forbes.</p>
                <BrevoForm
                  successLocation={`${process.env.DOMAIN}/free-event-planning-webinar/thank-you`}
                  listId={brevoListId}
                  emailTemplateId={brevoEmailTemplateId}
                  gclid={props.gclid}
                  msclkid={props.msclkid}
                  utmSource={props.utmSource}
                  utmMedium={props.utmMedium}
                  utmCampaign={props.utmCampaign}
                  utmContent={props.utmContent}
                  utmTerm={props.utmTerm}
                  placeholders
                  button={(
                    <>
                      <button className="btn btn-primary d-md-none" style={{ paddingLeft: '1rem', paddingRight: '1.25rem' }}><span className="text-navy"><CheckIcon height="18" className="me-2" style={{ position: 'relative', top: -2 }} /></span>Watch the Webinar</button>
                      <button className="btn btn-navy d-none d-md-block" style={{ paddingLeft: '1rem', paddingRight: '1.25rem' }}><span className="text-primary"><CheckIcon height="18" className="me-2" style={{ position: 'relative', top: -2 }} /></span>Watch the Webinar</button>
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
