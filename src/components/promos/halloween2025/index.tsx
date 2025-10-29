import Image from 'next/image';
import type { FC } from 'react';

import HeroImage from './two-free-courses.jpg';

export const Halloween2025: FC = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h2>Your Bonus Awaits!</h2>
            <p className="mb-4">Today, as a special thank you for joining the QC Event School community, you can get two free courses, plus save $100 on your tuition when you enroll!</p>
            <div className="mb-4">
              <a href="https://enroll.qceventplanning.com/bogo-1"><Image src={HeroImage} alt="" className="img-fluid" /></a>
            </div>
            <a href="https://enroll.qceventplanning.com/bogo-1"><button className="btn btn-primary btn-lg">Claim Your Free Courses</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};
