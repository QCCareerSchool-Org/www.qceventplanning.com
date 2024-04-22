import Image from 'next/image';
import type { FC } from 'react';
import { useId } from 'react';

import HeroLgImage from './hero-large.jpg';
import HeroSmImage from './hero-small.jpg';
import ChartIcon from './icon-chart.svg';
import CheckIcon from '@/components/check.svg';

export const HeroSection: FC = () => {
  const id = useId();

  return (
    <section>
      <Image src={HeroLgImage} alt="" priority fill placeholder="blur" className="d-none d-md-block" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      <Image src={HeroSmImage} alt="" priority fill sizes="100%" placeholder="blur" className="d-md-none" style={{ objectFit: 'cover', objectPosition: '100% 50%' }} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-6">
            <div className="card">
              <div className="card-body">
                <p className="lead text-primary fw-bold text-uppercase mb-1">Free Workshop <span style={{ position: 'relative', top: -2 }}><ChartIcon height={18} /></span></p>
                <h1 className="h4">Become an Event Planner</h1>
                <p>Learn the tips, tricks, and insider knowledge you need to start &amp; grow a successful event planning business from scratch</p>
                <form action="https://go.qccareerschool.com/l/947642/2024-04-22/wm92v">
                  <div className="mb-3">
                    <label htmlFor={`${id}_firstName`} className="form-label">Name</label>
                    <input type="text" name="firstName" id={`${id}_firstName`} className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor={`${id}_emailAddress`} className="form-label">Email <span className="text-primary">*</span></label>
                    <input type="email" name="emailAddress" id={`${id}_emailAddress`} className="form-control" required />
                  </div>
                  <button className="btn btn-primary"><span className="text-navy"><CheckIcon height="18" className="me-2" style={{ position: 'relative', top: -2 }} /></span>Join the Workshop</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
