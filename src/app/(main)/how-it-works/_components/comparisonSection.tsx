import Link from 'next/link';
import type { FC } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

import { EventPlanningEducationComparisonTable } from '@/components/comparisonTable/eventPlanningEducation';
import { SectionHeader } from '@/components/sectionHeader';

export const ComparisonSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <SectionHeader
        eyebrow="Choosing Your Path"
        title="The Right Education for Your Goals"
        text="Whether you want to work in corporate event management or start your own business, the right training should fit your life, timeline, and ambitions."
      />
      <EventPlanningEducationComparisonTable />
      <div className="card shadow mt-5">
        <div className="card-body">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg">
              <h3 className="h4 mb-2">Have Questions? Speak with a Career Advisor.</h3>
              <p className="mb-0">Our team can help you choose the training path that fits your goals and schedule.</p>
            </div>
            <div className="col-12 col-lg-auto d-flex flex-column flex-sm-row gap-3">
              <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
              <Link href="/online-event-courses" className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-2">Explore Courses <BiRightArrowAlt aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
