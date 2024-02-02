'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part1Image from './part-1.jpg';
import Part2Image from './part-2.jpg';
import Part3Image from './part-3.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section id="outline" className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Festivals and Live Events workshop is divided into three parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals of Festivals and Live Events" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Discover the exciting opportunities available to you planning festivals and other live events</li>
              <li>Study how you can develop and execute show concepts that will be sure to wow event attendees</li>
              <li>Learn how to successfully work with high-profile talent for concerts, entertainment events and sporting events</li>
              <li>Explore marketing strategies to effectively promote concerts, festivals and other live events</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="The Planning Process for Live Events" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Study common festival goals to ensure your events surpass your clients' expectations</li>
              <li>Discover the ins and outs of the planning process and event operations, including staffing, planning traffic flow and risk management</li>
              <li>Explore the unique steps involved in international event planning</li>
              <li>Learn all about planning and using fireworks displays to make a memorable impression on attendees</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Partnerships and Working with Vendors" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Learn how to bid for and manage government partnerships</li>
              <li>Discover strategies to select the best site, vendors and partners to ensure each event is a success</li>
              <li>Study the process of application writing to secure grants and sponsorships</li>
              <li>Learn how to complete permit applications to execute successful events</li>
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
