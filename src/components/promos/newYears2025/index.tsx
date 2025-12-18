import Image from 'next/image';
import type { FC } from 'react';

import HeroImageDefault from './desktop.jpg';

interface Props {
  countryCode: string;
}

export const NewYears2025: FC<Props> = ({ countryCode }) => {

  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2 className="mb-3">Enroll Today and Get 2 Free Courses!</h2>
            <div className="mb-4">
              <a href="https://enroll.qceventplanning.com"><Image src={HeroImageDefault} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qceventplanning.com"><button className="btn btn-primary btn-lg">CLAIM MY FREE COURSES</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
