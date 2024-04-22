import Image from 'next/image';
import type { FC } from 'react';

import LisaImage from './lisa-screen.jpg';
import BackgroundImage from './table-setting-bg.jpg';

export const MeetInstructorSection: FC = () => (
  <section className="bg-light text-white">
    <Image src={BackgroundImage} alt="" fill placeholder="blur" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="h3 mb-3">Meet Your Instructor</h2>
          <p className="lead">Meet Lisa Forbes, owner of White Aspen Weddings and Lead Planner at Hitched Planning &amp; Design</p>
          <p className="mb-0">Lisa has not only crafted countless unforgettable moments, but has also built a lucrative career doing what she loves. She's a seasoned expert and successful entrepreneur ready to help <span className="text-uppercase">you</span> start and grow your own event planning business!</p>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={LisaImage} alt="Lisa" className="img-fluid rounded-4" />
        </div>
      </div>
    </div>
  </section>
);
