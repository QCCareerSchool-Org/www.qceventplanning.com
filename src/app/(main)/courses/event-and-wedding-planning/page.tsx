'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';

import HeroImage from './hero.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import { ConditionalBreak } from '@/components/conditionalBreak';
import { CourseType } from '@/components/courseType';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/heroButtons';

const courseCodes = [ 'ep' ];

const EventAndWeddingPlanningPage: FC = () => {

  const handlePaymentPlanClick: MouseEventHandler = e => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="container">
        <div className="row g-s">
          <div className="col-12">
            <Hero src={HeroImage}>
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Event &amp; Wedding Planning</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event &amp; Wedding Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} onPaymentPlansClick={handlePaymentPlanClick} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<ConditionalBreak xs={false} lg={true} />QC Event School</h2>
            <p className="mb-4">QC's Event & Wedding Planning Certification course provides students with the most comprehensive training available to succeed in the event industry.</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our premium event and wedding planning course is designed to take you from beginner to expert</li>
              <li>Personalized feedback & advice on your assignments from our top industry event planning experts</li>
              <li>Thriving virtual classroom to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified event and wedding planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and the International Live Events Association</li>
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAndWeddingPlanningPage;
