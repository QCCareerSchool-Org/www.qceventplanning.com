import type { Metadata } from 'next';

import { CarouselSection } from './carouselSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Student Success',
};

const testimonialIds = [ 'TE-0006', 'TE-0008', 'TE-0019', 'TE-0018', 'TE-0016', 'TE-0003' ];

const StudentSuccessPage: PageComponent = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="mb-3">Student Success</h1>
              <p className="lead mb-0">Discover the inspiring success stories of QC Event School graduates, and explore the exceptional events planned by QC's talented students.</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
      <GoogleReviewSection />
      <CarouselSection />
      <GetStartedSection title="Ready to Start Your Event & Wedding Planning Career?" text="Become Professionally Certified with QC's Online Event Planning Training" />
    </>
  );
};

export default StudentSuccessPage;
