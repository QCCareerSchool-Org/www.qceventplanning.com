'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import IEWPImage from './iewp.svg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { CourseType } from '@/components/courseType';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/heroButtons';
import { Testimonial } from '@/components/testimonial';

const courseCodes = [ 'ep' ];

const EventAndWeddingPlanningPage: FC = () => {

  const handlePaymentPlanClick: MouseEventHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12">
              <Hero src={HeroImage} priority>
                <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
                <h1 className="mb-2 mb-xl-4">Event &amp; Wedding Planning</h1>
                <p className="h5 mb-3 mb-xl-5">Become a Certified Event &amp; Wedding Planner</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <HeroButtons courseCodes={courseCodes} onPaymentPlansClick={handlePaymentPlanClick} />
                </div>
              </Hero>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Why Choose<br />QC Event School</h2>
              <p className="lead mb-4">QC's Event & Wedding Planning Certification course provides students with the most comprehensive training available to succeed in the event industry.</p>
              <ul className="mb-0">
                <li>No previous training required&mdash;our premium event and wedding planning course is designed to take you from beginner to expert</li>
                <li>Personalized feedback & advice on your assignments from our top industry event planning experts</li>
                <li>Thriving virtual classroom to connect with other event planners, get feedback, and gain access to bonus material</li>
                <li>Built-in business training to help you launch your career and grow your clientele as a certified event and wedding planner</li>
                <li>Discounts and affiliations with top organizations including Aisle Planner and the International Live Events Association</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <Image src={WhyQCImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-6 text-lg-center">
              <h2 className="mb-4">What Our Students and Grads Are Saying</h2>
              <p className="lead mb-5">We've helped 8000+ students and graduates start their own successful event and wedding planning business!</p>
            </div>
          </div>
          <div className="row justify-content-center g-s">
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0001" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0002" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0003" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0004" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0005" />
            </div>
            <div className="col-12 col-sm-8 col-lg-4">
              <Testimonial id="TE-0006" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-s">
            <div className="col-12 col-lg-6">
              <h2 className="mb-3">Here's What You'll Learn</h2>
              <p className="lead">QC's comprehensive event & wedding planning course will shows you how to:</p>
              <ul className="mb-0">
                <li>Plan and organize milestone parties, weddings, industry special events, and more!</li>
                <li>Develop a unique theme, atmosphere, and vision for events with your clients</li>
                <li>Hire and negotiate contracts with popular and niche event vendors</li>
                <li>Discuss, create, and balance any client budget with confidence</li>
                <li>Build your brand and market your new event and wedding planning business</li>
                <li>Plan a styled shoot and develop a professional portfolio that helps you land new clients</li>
              </ul>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <Image src={CertificationBackgroundImage} fill objectFit="cover" alt="" sizes="100vw" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
              <IEWPImage className="mb-3" />
              <h2 className="text-white mb-3">Event &amp; Wedding Planning Certification</h2>
              <p className="mb-3">Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event and Wedding Planning Professional (IEWP). The IEWP Event & Wedding Planning certification is approved by the International Live Events Association and cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
              <p className="mb-0 small gold">International Event and Wedding Planning Professional™</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventAndWeddingPlanningPage;
