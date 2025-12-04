import type { FC, ReactNode } from 'react';

import BookIcon from './book.svg';
import CertIcon from './cert.svg';
import ChartIcon from './chart.svg';
import ChatIcon from './chat.svg';
import CoinsIcon from './coins.svg';
import { FadeUpAnimation } from './fadeUpAnimation';
import InfinityIcon from './infinity.svg';

interface Props {
  heading?: string | ReactNode;
  subheading?: string | ReactNode;
  feedbackText?: string | ReactNode;
  trainingText?: string | ReactNode;
  exercisesText?: string | ReactNode;
}

export const JoinQCSection: FC<Props> = ({ heading, subheading, feedbackText, trainingText, exercisesText }) => (
  <section className="bg-light">
    <div className="container text-center">
      <FadeUpAnimation>
        <h2 className="h3 mb-4">{heading ?? 'Join QC Event School'}</h2>
        <p className="lead mb-4">{subheading ?? 'QC\'s event &amp; wedding planning courses provide you with:'}</p>
      </FadeUpAnimation>
      <div className="row justify-content-center g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <ChatIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">One-on-One Feedback</h3>
              <p className="mb-0">{feedbackText ?? 'Personalized 1-on-1 feedback from a tutor invested in your success'}</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <CoinsIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Flexible Payment Options</h3>
              <p className="mb-0">Enjoy affordable tuition with flexible payment plans that fit your budget</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <ChartIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Comprehensive Training</h3>
              <p className="mb-0">{trainingText ?? 'Practical knowledge for budgeting, coordinating, and executing a variety of events'}</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <BookIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Real-World Exercises</h3>
              <p className="mb-0">{exercisesText ?? 'Hands-on assignments based on real-world scenarios and clients personas'}</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <CertIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Professional Certification</h3>
              <p className="mb-0">Earn a recognized certification and professional designation when you graduate</p>
            </div>
          </FadeUpAnimation>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <FadeUpAnimation>
            <div>
              <InfinityIcon className="mt-3 mb-4" />
              <h3 className="h6 mb-4">Lifetime Access</h3>
              <p className="mb-0">Enjoy lifetime access to your course materials, updates, and ready-to-use business templates</p>
            </div>
          </FadeUpAnimation>
        </div>
      </div>
    </div>
  </section>
);
