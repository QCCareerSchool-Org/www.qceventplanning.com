import Image from 'next/image';
import type { FC } from 'react';
import { useId } from 'react';

import HeroLgImage from './hero-large.jpg';
import HeroSmImage from './hero-small.jpg';
import ChartIcon from './icon-chart.svg';
import styles from './index.module.scss';
import CheckIcon from '@/components/check.svg';
import { getData } from '@/lib/getData';

type Props = {
  extraFields?: boolean;
};

export const HeroSection: FC<Props> = ({ extraFields }) => {
  const id = useId();

  const { testGroup, countryCode, provinceCode } = getData();

  return (
    <section style={{ backgroundColor: '#e3dfda' }}>
      <Image src={HeroLgImage} alt="" priority fill placeholder="blur" className="d-none d-md-block" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      <Image src={HeroSmImage} alt="" priority fill sizes="100%" placeholder="blur" className="d-md-none" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      <div className={styles.overlay} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <p className={`lead text-primary fw-bold text-uppercase mb-1 d-none d-md-block`}>Free Webinar <span style={{ position: 'relative', top: -2 }}><ChartIcon height={18} /></span></p>
                <h1 className={`h4 ${styles.cardHeader} mb-3 mb-md-2`}>Ready to Launch Your Event Planning Career?</h1>
                <p className="d-none d-md-block">Explore insider secrets with Lisa Forbes, the force behind White Aspen Weddings and Hitched Planning &amp; Design</p>
                <form action="https://go.qccareerschool.com/l/947642/2024-06-03/wxvtv">
                  <input type="hidden" name="school" value="QC Event Planning" />
                  <input type="hidden" name="testGroup" value={testGroup} />
                  <input type="hidden" name="countryCode" value={countryCode} />
                  <input type="hidden" name="provinceCode" value={provinceCode ?? ''} />
                  <div className="mb-3">
                    <input type="text" name="firstName" id={`${id}firstName`} className="form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="emailAddress" id={`${id}emailAddress`} className="form-control" placeholder="Email *" required />
                  </div>
                  {extraFields
                    ? (
                      <div className="mb-3">
                        <select name="interests" id={`${id}interests`} className="form-control">
                          <option value="" selected>Why do you want to attend the webinar?</option>
                          <option value="Career">I'm exploring a career in the event industry</option>
                          <option value="Business">I want to start a business in event planning</option>
                        </select>
                      </div>
                    )
                    : <input type="hidden" name="webinarQuestionNone" value="1" />
                  }
                  <div className="mb-3">
                    <div className="form-check">
                      <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" value="Yes" />
                      <label htmlFor={`${id}emailOptIn`} className="form-check-label small">
                        I agree to receive additional emails from QC, including <span className="d-none d-md-inline">promotions, </span>special offers<span className="d-none d-md-inline"> and more</span>. Unsubscribe anytime!
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-navy"><span className="text-primary"><CheckIcon height="18" className="me-2" style={{ position: 'relative', top: -2 }} /></span>Access FREE Webinar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
