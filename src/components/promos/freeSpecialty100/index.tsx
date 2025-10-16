import Image from 'next/image';
import type { FC } from 'react';

import HeroUKImage from './desktop-uk.jpg';
import HeroImage from './desktop.jpg';

type Props = {
  countryCode: string;
};

export const FreeSpecialty100: FC<Props> = ({ countryCode }) => {
  const [ discount, imgSrc ] = countryCode === 'GB'
    ? [ '£100', HeroUKImage ]
    : [ '$100', HeroImage ];
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2>Your Bonus Awaits!</h2>
            <p className="mb-4">As a special thank you for joining the QC Event School community, you can get a FREE specialty courses plus {discount} off if you enroll in a foundation course today.</p>
            <div className="mb-4">
              <a href="https://enroll.qceventplanning.com"><Image src={imgSrc} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qceventplanning.com"><button className="btn btn-primary btn-lg">Claim Your Free Courses</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
