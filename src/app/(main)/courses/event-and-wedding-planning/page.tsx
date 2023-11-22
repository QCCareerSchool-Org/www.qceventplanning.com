'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC, MouseEventHandler } from 'react';

import AislePlannerBackgroundImage from './aisle-planner-background.jpg';
import AislePlannerLogoImage from './aisle-planner-logo.png';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import IEWPImage from './iewp.svg';
import PlaceSettingImage from './place-setting.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import { CourseType } from '@/components/courseType';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/heroButtons';
import { Testimonial } from '@/components/testimonial';
import { AlyssaPerna } from '@/tutors/alyssaPerna';
import { MwaiYeboah } from '@/tutors/mwaiYeboah';

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
        <Image src={CertificationBackgroundImage} fill placeholder="blur" objectFit="cover" alt="" sizes="100vw" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
              <IEWPImage className="mb-3" alt="International Event and Wedding Planning Professional certification logo" />
              <h2 className="text-white mb-3">Event &amp; Wedding Planning Certification</h2>
              <p className="mb-3">Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event and Wedding Planning Professional (IEWP). The IEWP Event & Wedding Planning certification is approved by the International Live Events Association and cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
              <p className="mb-0 small gold">International Event and Wedding Planning Professional™</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-s">
            <div className="d-none d-lg-block col-lg-6">
              <Image src={PlaceSettingImage} alt="" className="img-fluid" sizes="50vw" />
            </div>
            <div className="col-12 col-lg-6">
              <p className="mb-3 fst-italic">An International Team of Instructors</p>
              <h2 className="h3 mb-3">Meet Your New Event &amp; Wedding Planning Instructors</h2>
              <p className="mb-5">QC is proud to work with leaders of the global event planning industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring event planners around the globe.</p>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <MwaiYeboah />
                  </div>
                  <h3 className="h6 mb-3">Mwai Yeboah</h3>
                  <p className="small mb-0">Mwai Yeboah, founder of Love From Mwai in the UK, specializes in destination wedding planning. As the lead planner and designer, she transforms weddings and events into immersive experiences for luxury clients worldwide.</p>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <AlyssaPerna />
                  </div>
                  <h3 className="h6 mb-3">Alyssa Perna</h3>
                  <p className="small mb-0">Alyssa Perna, Principal of Experience Events and Managing Director at Ingenuity Cleveland, brings over a decade of diverse event operations experience, including multinational conferences, festivals, fundraisers, and various social events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12 col-sm-10 col-md-8 text-center">
              <h2 className="mb-3">Course Outline</h2>
              <p className="mb-0">The Event and Wedding Planning Course is divided into 7 parts, each comprising separate training units.</p>
            </div>
            <div className="col-12 col-sm-10 col-md-8 text-center">
              xxx
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
              <h3 className="h5 mb-3">Have Questions About the Course?</h3>
              <p className="lead mb-3">Don't hesitate to reach out to our dedicated student support team for guidance and support. <strong>Your success is our priority!</strong></p>
              <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white">
        <Image src={AislePlannerBackgroundImage} fill placeholder="blur" objectFit="cover" alt="" sizes="100vw" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
              <h2><Image src={AislePlannerLogoImage} alt="Aisle Planner" className="img-fluid mb-4" /></h2>
              <p className="mb-0">As a QC Student, you'll have access to an amazing event planning software, Aisle Planner! This software allows you to manage all your events at the touch of a button, from creating a project timeline to planning seating for your event to keeping track of all your clients, and so much more! For a limited time, all QC students can get a 6-month subscription to Aisle Planner, absolutely free!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventAndWeddingPlanningPage;
