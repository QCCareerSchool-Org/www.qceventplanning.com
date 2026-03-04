import Link from 'next/link';

import type { PageComponent } from '@/app/serverComponent';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import type { CourseCode } from '@/domain/courseCode';

const enrollHref = 'https://enroll.qceventplanning.com/all-access-program';

const courseCodes: CourseCode[] = [ 'aa' ];

const AllAccessProgramPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Join the All-Access Program</h1>
        <p className="lead">Maximize Your Earning Potential</p>
        <Link href={enrollHref} className="btn btn-primary">Enroll Now</Link>
        <Link href="#includede" className="btn btn-secondary">See What's Included</Link>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Build a Full-Service Event Business</h2>
        <p>Get instant access to the complete QC Event Planning online curriculum and earn up to ten certifications at your own pace. Complete the courses that align with your goals—or finish them all to graduate with your Master Planner Certificate.</p>
        <ul>
          <li>Master Every Type of Event. Develop the specialized planning expertise to confidently handle weddings, corporate events, luxury celebrations, live events, and more.</li>
          <li>Say Yes to More Opportunities. Expand your services and build an adaptable business so you never have to turn away a client.</li>
          <li>Fast-Track Your Career. Graduate in under a year, and move quickly from training to booking paid projects.</li>
          <li>Command Higher Fees. Deliver a polished, professional, full-service experience that justifies premium pricing.</li>
          <li>Earn Recognized Credentials. Prove your expertise and graduate with a certification for every course completed—plus your Master Planner Certificate.</li>
          <li>Build confidence through comprehensive training. Complete hands-on assignments and receive personalized expert feedback so you're fully prepared for any event.</li>
        </ul>
        <Link href={enrollHref} className="btn btn-primary">Become a Master Planner</Link>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Testimonials</h2>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>What You'll Learn</h2>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Certifications That Prove Your Expertise</h2>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Who This Program Is For</h2>
      </div>
    </section>
    <PaymentPlanSection courseCodes={courseCodes} />
    <section>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
      </div>
    </section>
  </>
);

export default AllAccessProgramPage;
