import Image from 'next/image';
import type { FC } from 'react';

import Background from './background.jpg';
import LogoImage from './logo.png';
import { BackgroundImage } from '@/components/backgroundImage';

export const SAFPartnerSection: FC = () => (
  <section className="text-white text-center">
    <BackgroundImage src={Background} />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <div className="mb-5">
            <Image src={LogoImage} alt="Society of American Florists" height={120} />
          </div>
          <p className="mb-0">QC is a proud partner of the Society of American Florists, offering Floral Design students exclusive discounts and professional opportunities through this prestigious organization.</p>
        </div>
      </div>
    </div>
  </section>
);
