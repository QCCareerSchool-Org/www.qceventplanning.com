import type { FC } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import CertificationLogo from '@/components/certifications/iepp.svg';
import { Overlay } from '@/components/overlay';

export const CertificationSection: FC = () => (
  <section className="text-white text-shadow">
    <BackgroundImage src={CertificationBackgroundImage} />
    <Overlay backgroundColor="rgba(0,0,0,0.2)" />
    <div className="container">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-12 col-lg-4 text-center">
          <CertificationLogo height="200" className="mb-3" title="International Design and Decorating Professional (IDDP) certification logo" />
        </div>
        <div className="col-12 col-lg-8 text-center text-lg-start">
          <h2 className="text-white mb-3">Become a Certified Event Planning Professional with QC Event School!</h2>
          <p>Once you have successfully completed all of your assignments and your tuition has been paid in full, you'll be all set to graduate from QC Event School! Your certificate of completion will be sent straight to you so you can begin your exciting career as an event planner.</p>
          <div className="d-lg-none" style={{ height: 100 }} />
        </div>
      </div>
    </div>
  </section>
);
