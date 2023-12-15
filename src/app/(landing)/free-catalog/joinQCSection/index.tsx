import type { FC } from 'react';

import BookIcon from './book.svg';
import CertIcon from './cert.svg';
import ChartIcon from './chart.svg';
import ChatIcon from './chat.svg';
import CoinsIcon from './coins.svg';
import { FadeUpAnimation } from './fadeUpAnimation';
import InfinityIcon from './infinity.svg';

export const JoinQCSection: FC = () => (
  <section className="bg-light">
    <div className="container text-center">
      <FadeUpAnimation>
        <h2 className="h3 mb-4">Join QC Event School</h2>
        <p className="lead mb-4">QC's event &amp; wedding planning courses provide you with:</p>
      </FadeUpAnimation>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <ChatIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">One-on-One Feedback</h3>
              <p className="mb-0">Personalized 1-on-1 feedback from a tutor invested in your success.</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <ChartIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Comprehensive Training</h3>
              <p className="mb-0">Practical knowledge for budgeting, coordinating, and executing a variety of events.</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <BookIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Real-World Exercises</h3>
              <p className="mb-0">Hands-on assignments based on real-world scenarios and clients personas.</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <InfinityIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Lifetime Access</h3>
              <p className="mb-0">Lifetime access to up-to-date course materials and business templates.</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <CertIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Professional Certification</h3>
              <p className="mb-0">A professional certification and designation upon graduation of your course.</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <CoinsIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Flexible Payment Options</h3>
              <p className="mb-0">Flexible tuition payment options. No hidden fees. No additional costs.</p>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
    </div>
  </section>
);
