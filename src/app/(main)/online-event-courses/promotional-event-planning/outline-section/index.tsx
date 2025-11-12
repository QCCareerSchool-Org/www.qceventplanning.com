/**
 * Make sure to update @/domain/courseCode.ts if the subjects change.
 */
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
          <p className="lead mb-0">The Promotional Event Planning specialization course is divided into three parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Promotional Events" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Discover the various types of promotional events</li>
              <li>Learn about the top jobs for promotional event planners</li>
              <li>Study new and exciting experiential marketing techniques</li>
              <li>Explore the unique aspects of the planning process and concept development for promotional events</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Promotional Event Marketing and Execution" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Discover a variety of marketing techniques to ensure you surpass your clients' goals</li>
              <li>Study the ins and outs of effective execution on the day-of your promotional event</li>
              <li>Learn how to measure event success by setting and evaluating goals</li>
              <li>Explore an in-depth case study discussing the Grand Opening of the Rock and Roll Hall of Fame</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Trends and Technology" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Discover new trends in the thriving promotional events industry</li>
              <li>Learn how to integrate new technology and innovative features into your events</li>
              <li>Discover the many different types of promotional events and the various scales they can take</li>
              <li>Dive into a high-profile case study discussing Maserati's &ldquo;One of 100&rdquo; Event</li>
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
