import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import WhyQCImage from './why-qc.jpg';

export const WhatYoullLearnSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="h3 mb-3">Here's What You'll Learn in This <span className="text-uppercase">Free</span> Career Workshop:</h2>
          <ul className="mb-0">
            <li>Get the <b>real</b> scoop on how to kickstart your event planning career, from business tips and networking hacks to gaining real-world experience</li>
            <li>Find out if jumping into event planning in 2024 is a smart move and snag some insider tips on how you can stand out in a crowded field</li>
            <li>Learn about the common slip-ups newbie event planners make and how to avoid them, setting yourself up for success from the get-go</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
        </div>
      </div>
    </div>
  </section>
);
