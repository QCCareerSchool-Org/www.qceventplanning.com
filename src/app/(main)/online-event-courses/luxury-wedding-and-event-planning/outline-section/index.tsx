/**
 * Make sure to update @/domain/courseCode.ts if the subjects change.
 */
'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part1Image from './part-1.jpg';
import Part2Image from './part-2.jpg';
import Part3Image from './part-3.jpg';
import Part4Image from './part-4.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline" className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Luxury Wedding &amp; Event Planning course is divided into 4 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals of Luxury Event Planning" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Discover what makes an event truly luxurious, and find out how to offer luxury planning services to your clients</li>
              <li>Explore the ways in which you can personalize events to give your clients a unique experience they'll treasure forever</li>
              <li>Learn how to impress even the most extravagant clients!</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Marketing Strategies for Luxury Services" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Find out which marketing channels will help you reach out to your ideal clients</li>
              <li>Develop marketing strategies that will attract luxury clientele to your unique brand</li>
              <li>Learn how color schemes can enhance your brand and convey a luxury brand</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Luxury Clients and Budgets" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Find out how to qualify your clients, conduct client consultations and draft contracts to impress luxury clientele</li>
              <li>Understand how to structure budgets for luxury weddings and events</li>
              <li>Establish a step-by-step timeline</li>
              <li>Discover various pricing models and learn how to charge for your services</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="High-End Vendors and Trends" src={Part4Image}>
            <ul className="small">
              <li>Discover the types of vendors you'll work with as a luxury planner, and find out what to look for in these vendors to ensure top-notch events</li>
              <li>Explore strategies for developing lasting relationships with good vendors you can trust</li>
              <li>Find out how to keep up with and set trends in the luxury and event planning industry</li>
            </ul>
          </CourseOutline>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <h3 className="h5 mb-3">Have Questions About the Course?</h3>
          <p className="lead mb-3">Don't hesitate to reach out to our dedicated student support team for guidance and support. <strong>Your success is our priority!</strong></p>
          <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
        </div>
      </div>
    </div>
  </section>
);
