import Image from 'next/image';
import type { FC } from 'react';

import HeroImageDefault from './desktop.jpg';
import HeroImageHundredUK from './100-desktop-uk.jpg';
import HeroImageHundredDefault from './100-off-desktop.jpg';
import { gbpCountry } from '@/domain/currency';

interface Props {
  countryCode: string;
  date: number;
}

export const NewYears2025: FC<Props> = ({ countryCode, date }) => {
  const hundredOffWindow = date >= Date.UTC(2026, 0, 7, 8) && date < Date.UTC(2026, 0, 17, 8);
  const heroImageSrc = hundredOffWindow
    ? (gbpCountry(countryCode) ? HeroImageHundredUK : HeroImageHundredDefault)
    : HeroImageDefault;

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Enroll Today and Get 2 Free Courses!</h2>
            <div className="mb-4">
              <a href="https://enroll.qceventplanning.com"><Image src={heroImageSrc} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qceventplanning.com"><button className="btn btn-primary btn-lg">CLAIM MY FREE COURSES</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
