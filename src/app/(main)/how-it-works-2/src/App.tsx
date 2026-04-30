'use client';

import { Hero, CareerStats, Responsibilities, Journey } from './components/pageSections';
import { Comparison } from './components/comparison';
import { TrustCounter, WhyQC } from './components/trustWhyQC';
import { Specializations, Traits } from './components/specializationsTraits';
import { Testimonials, FAQ, FooterCTA } from './components/sliderFAQ';
import { Navigation } from './components/navigation';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CareerStats />
      <Responsibilities />
      <Journey />
      <Comparison />
      <TrustCounter />
      <WhyQC />
      <Specializations />
      <Traits />
      <Testimonials />
      <FAQ />
      <FooterCTA />
    </div>
  );
}
