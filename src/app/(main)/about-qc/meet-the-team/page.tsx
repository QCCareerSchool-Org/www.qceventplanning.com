import type { Metadata } from 'next';

import { employees } from './data';
import { EmployeeColumn } from './employeeColumn';
import { mapToPairs } from './mapToPairs';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';

export const metadata: Metadata = {
  title: 'Meet the Team',
  alternates: {
    canonical: '/about-qc/meet-the-team',
  },
};

const MeetTheTeamPage: PageComponent = () => {
  const employeePairs = employees.flatMap(mapToPairs);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xxl-9 text-center">
              <h1 className="mb-4">Meet the Team<br />Rooting for Your Success</h1>
              <p className="lead mb-0">At QC, our team is passionate about your education. From QC's innovative executive team to our dedicated student services, we are committed to providing you with the training and support you need to build a successful career. Discover just a few of the people working behind the scenes at QC to help you achieve your dreams.</p>
            </div>
          </div>
        </div>
      </section>
      {employeePairs.map(([ employee1, employee2 ], i) => (
        <section key={i} className={i % 2 === 0 ? 'bg-light' : undefined}>
          <div className="container">
            <div className="row g-s">
              <EmployeeColumn {...employee1} />
              {employee2 && <EmployeeColumn {...employee2} />}
            </div>
          </div>
        </section>
      ))}
      <GoogleReviewSection className={employeePairs.length % 2 === 0 ? 'bg-light' : undefined} />
      <GetStartedSection title="Get Started Today" text="Unlock your potential and the step towards a rewarding career. Enroll now and join thousands of students who've turned their passion into success." />
    </>
  );
};

export default MeetTheTeamPage;
