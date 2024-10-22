import type { Metadata } from 'next';
import Image from 'next/image';

import { CertificationSection } from './certificationSection';
import HowItWorksImage from './how-it-works.jpg';
import BookReaderIcon from './icons/book-reader.svg';
import FeedbackIcon from './icons/check-speech.svg';
import CheckIcon from './icons/list-check.svg';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';

export const metadata: Metadata = {
  title: 'How It Works',
};

const iconSize = 24;

const HowItWorksPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s align-items-center">
          <div className="col-12 col-lg-7">
            <h1 className="h2 mb-4">How QC's Online Event Planning Courses Work</h1>
            <p className="mb-0">QC Event Planning offers flexible, self-paced online courses you can complete from home. You'll get hands-on training, detailed feedback, and personal guidance throughout the course.</p>
            <ul className="mb-0">
              <li className="col-12">Each online event planning course includes digital lessons, video tutorials, and customizable business templates.</li>
              <li className="col-12">You'll complete theory-based and practical assignments to hone your event planning skills, and submit them for tutor feedback and grading.</li>
              <li className="col-12">Get help anytime from our Student Support Team.</li>
              <li className="col-12">Earn professional certification upon course completion.</li>
            </ul>
          </div>
          <div className="col-12 col-lg-5">
            <Image src={HowItWorksImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <BookReaderIcon width={iconSize} className="text-primary mb-1" />
            <p className="text-primary fw-bold text-uppercase">Step 1</p>
            <h2 className="h4">Access Course Materials</h2>
            <p>When you enroll with QC Event Planning, you'll have full access to the Online Student Center where you'll find all your online course texts, assignment templates, videos, and more. You'll have easy, convenient access to everything you need to complete your course!</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <CheckIcon width={iconSize} className="text-primary mb-1" />
            <p className="text-primary fw-bold text-uppercase">Step 2</p>
            <h2 className="h4">Submit Your Assignments</h2>
            <p>Once you've finished a unit, you'll submit your assignments through the Online Student Center, and these will be sent directly to your personal tutor. Your tutor reviews your work and provides expert feedback within 7-10 business days!</p>
          </div>
          <div className="col-12 col-md-8 col-lg-4 text-center">
            <FeedbackIcon width={iconSize} className="text-primary mb-1" />
            <p className="text-primary fw-bold text-uppercase">Step 3</p>
            <h2 className="h4">Review Your Feedback</h2>
            <p>Once you've finished a unit, you'll submit your assignments through the Online Student Center. Your tutor reviews your work and provides expert feedback. If you ever need help along the way, simply reach out to the School or connect with your peers in the Virtual Community.</p>
          </div>
        </div>
      </div>
    </section>
    <CertificationSection />
    <GoogleReviewSection />
    <GetStartedSection
      title="Start Your Event Planning Career Today!"
      text="It's never too late to start a career you'll love. Enroll in an online course with QC today and become a certified event planning professional!"
      buttonText="View Courses"
      buttonHref="/online-courses"
    />
  </div>
);

export default HowItWorksPage;
