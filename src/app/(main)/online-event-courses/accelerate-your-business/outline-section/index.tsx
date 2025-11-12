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
          <p className="lead mb-0">The Accelerate Your Business Workshop is divided into 4 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Branding and Promotions" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Discover the importance of creating a strong brand identity for your business and how to target your ideal clients</li>
              <li>Consider your business and your goals as you work on establishing your brand while developing your customer personas</li>
              <li>Start thinking about different types of promotions you might run for your business</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Your Online Presence" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Explore your online presence, from your website to your social media presence</li>
              <li>Learn how to market your business online through developing an effective website, the art of blogging, content marketing and more</li>
              <li>Discover how to effectively manage your social media presence, and how to handle negative reviews</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Attract Your Target Clients" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Discover how you can present your business to appeal to the right clients</li>
              <li>Learn how to develop an eye-catching professional portfolio</li>
              <li>Study the art of communicating effectively as a business owner</li>
              <li>Practice preparing client proposals designed to impress</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Successful Project Management" src={Part4Image}>
            <ul className="small">
              <li>Discover the different tools you can use to stay organized and to manage your projects</li>
              <li>Study financial management solutions that can help keep your business on track</li>
              <li>Explore the practicalities of building a budget</li>
              <li>Consider the best methods of collecting payments from clients</li>
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
