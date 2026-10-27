import type { Metadata } from 'next';
import Link from 'next/link';

import { Blurb } from './blurb';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { tutors } from '@/domain/tutorData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Tutors',
  alternates: {
    canonical: '/tutors',
  },
};

const TutorsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">QC Event School Tutors and Content Experts</h1>
            <p className="lead mb-0">Every QC Event School course is developed with leading event professionals. Two groups of experts shape your training. Your tutor is a working event or wedding planner who grades your assignments and guides you toward professional-level skills through personalized, audio feedback. Course experts are industry leaders who contribute their specialized knowledge and experience to developing QC's course content, helping you learn practical skills and techniques you can apply when planning events for clients.</p>
          </div>
          {tutors.map((t, i) => (
            <div key={i} className="col-12">
              <Blurb tutor={t} priority={i <= 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <ILEASection />
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">How Does Tutoring Work?</h1>
            <p className="lead mb-0">Once you enroll in your QC Event School course, you'll be paired with a working event or wedding planner who grades your assignments, gives personalized feedback, and helps you develop professional planning skills. Here's how it works:</p>
            <ol className="mt-3">
              <li className="mb-3">
                <strong>Get matched with your tutor.</strong> Your first assignment introduces you to your tutor and shares your goals and the types of events you want to plan.
              </li>
              <li className="mb-3">
                <strong>Complete practical assignments.</strong> Each unit includes assignments based on realistic client scenarios, such as creating an event budget, selecting a venue, or building a wedding timeline. You submit your work online through the Online Student Center.
              </li>
              <li className="mb-3">
                <strong>Receive personalized feedback.</strong> Your tutor grades your assignments and provides detailed audio feedback within four business days. This helps you understand your strengths and identify areas to improve. The Event and Wedding Planning course includes seven one-on-one tutor reviews.
              </li>
              <li className="mb-3">
                <strong>Get support throughout your studies.</strong> Between tutor reviews, QC's Student Support Team is available by phone, email, or live chat to answer questions and help you stay on track.
              </li>
              <li className="mb-3">
                <strong>Earn recognition for your work.</strong> Earn an Award of Excellence for each unit you complete with a grade of A or higher. Your tutor may also award an Award of Merit to recognize exceptional work.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection id="TE-0013" />
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-8 text-center">
            <h2 className="mb-3">Unlock Your Event Planning Potential with Expert Insights!</h2>
            <p className="lead mb-3">Dive into learning with individualized guidance from experts in event and wedding planning</p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-primary me-3" href="https://enroll.qceventplanning.com">Enroll Now</Link>
              <Link className="btn btn-outline-light" href="/online-event-courses">View Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TutorsPage;
