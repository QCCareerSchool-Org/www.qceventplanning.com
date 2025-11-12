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
          <p className="lead mb-0">The Destination Wedding Planning course is divided into 4 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Planning Destination Weddings" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Dive into your role as a destination wedding planner, and find out why clients opt to have destination weddings</li>
              <li>Learn about the options available to clients who are searching for the perfect location for their special day</li>
              <li>Explore the top considerations for researching destination wedding locations to help your clients plan the wedding of their dreams</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="The Planning Process" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Study the unique steps involved  in planning a destination wedding planning so that you're well prepared to account for every detail</li>
              <li>Learn how to calculate estimates and retainer fees, as well as how to assess your client's budgets</li>
              <li>Find out how you can incorporate themes that add to the beauty of your client's wedding destination</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Communication Strategies" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Learn about the different types of vendors commonly used in destination weddings</li>
              <li>Study communication tips to successfully set expectations and timelines with your clients</li>
              <li>Learn new strategies for communicating from a distance, including how to get past language barriers effectively</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Running Your Business" src={Part4Image}>
            <ul className="small">
              <li>Study various pricing models and select one that works best for your services</li>
              <li>Discover how social media marketing benefits your business, from finding new clients to networking</li>
              <li>Learn how to overcome challenges in destination wedding planning, and study the importance of contingency plans</li>
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
