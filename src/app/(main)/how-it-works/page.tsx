import type { Metadata } from 'next';

import { CareerStatsSection } from './_components/careerStatsSection';
import { ComparisonSection } from './_components/comparisonSection';
import { FAQSection } from './_components/faqSection';
import { HeroSection } from './_components/heroSection';
import { JourneySection } from './_components/journeySection';
import { ResponsibilitiesSection } from './_components/responsibilitiesSection';
import { SpecializationsSection } from './_components/specializationsSection';
import { TraitsSection } from './_components/traitsSection';
import { WhyQCSection } from './_components/whyQCSection';
import { GetStartedSection } from '@/components/getStartedSection';
import { StatsSection } from '@/components/statsSection/statsSection';
import { TestimonialCarousel } from '@/components/testimonialCarousel';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'How to Become an Event Planner',
  description: 'Learn how QC Event School helps aspiring event planners build practical skills, earn professional certification, and start a flexible career in event planning.',
  alternates: {
    canonical: '/how-it-works',
  },
};

const HowItWorksPage: PageComponent = () => (
  <div className="chos">
    <HeroSection />
    <CareerStatsSection />
    <ResponsibilitiesSection />
    <JourneySection />
    <ComparisonSection />
    <StatsSection />
    <WhyQCSection />
    <SpecializationsSection />
    <TraitsSection />
    <section className="bg-light">
      <TestimonialCarousel />
    </section>
    <FAQSection />
    <GetStartedSection
      title="Ready to Launch Your Event & Wedding Planning Career?"
      text="Gain the industry-standard IEWP™ certification through QC’s mentored online programs. Start building your portfolio and booking clients in as little as 12 weeks."
      buttonText="Explore Certification Programs"
      buttonHref="/online-event-courses"
    />
  </div>
);

export default HowItWorksPage;
