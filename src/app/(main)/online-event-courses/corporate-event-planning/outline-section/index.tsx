'use client';

import Link from 'next/link';
import type { FC } from 'react';

import Part1Image from './part-1.jpg';
import Part2Image from './part-2.jpg';
import Part3Image from './part-3.jpg';
import Part4Image from './part-4.jpg';
import Part5Image from './part-5.jpg';
import Part6Image from './part-6.jpg';
import { CourseOutline } from '@/components/courseOutline';

export const OutlineSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Corporate Event Planning Course is divided into 3 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="Introduction to Corporate Event Planning" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Discover exciting career opportunities for corporate event planners and explore the path that's right for you</li>
              <li>Study the different types of corporate events, from team-building activities to corporate trade shows, and the unique planning considerations for each one</li>
              <li>Explore the importance of event branding when it comes to corporate clients, and learn how to identify a target audience </li>
              <li>Learn how to develop an event concept that aligns with your client's goals for an event</li>
              <li>Discover how to plan activities, entertainment and collateral to create a memorable guest experience</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Working with Venues and Technology" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Discover tips and tricks for researching venues to ensure find the best possible locations for your clients' events</li>
              <li>Study common venue policies and learn negotiation practices to help you stay on budget</li>
              <li>Learn how to develop seating arrangements and room layouts to make the most of different events and venues</li>
              <li>Explore important considerations for working with caterers and other event vendors</li>
              <li>Learn about live streaming, webinars and other ways to use technology to enhance your events</li>
              <li>Discover how to create an effective Request for Proposal (RFP) to attract top-quality vendors and partners to your events</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Designing and Executing Corporate Events" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Learn how to use event design to translate your event concept and branding into the guest experience</li>
              <li>Discover how to promote your events through multi-channel marketing strategies including web design, SEP and content marketing</li>
              <li>Study essential risk management strategies and contingency plans to ensure you're prepared for any unexpected challenges you may encounter</li>
              <li>Learn about event and vendor insurance to protect yourself and your clients</li>
              <li>Study an event's critical path and explore project management methods so that your events will be well planned and seamlessly executed</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Event Types and Evaluation" src={Part4Image} className="mb-3">
            <ul className="small">
              <li>Discover the different facets of the corporate event industry including internal business events, internal social events, external corporate events, industry and public events, and non-profit and government events</li>
              <li>Explore three detailed case studies with event expert Mark Cheplowitz to gain insider knowledge of corporate event planning</li>
              <li>Learn how to evaluate the success of your event based on your client's goals</li>
              <li>Study effective communication strategies including essential components of a successful client consultation so that you'll understand exactly what each client wants to accomplish with their event</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Hands-On Training" src={Part5Image} className="mb-3">
            <ul className="small">
              <li>Conduct a case study analysis of the event planning process</li>
              <li>Complete a hands-on final project to plan an entire event from beginning to end, working with a real-world client and scenario</li>
              <li>Work on customizing resumes and cover letters to impress potential employers, and build a portfolio to secure clients</li>
              <li>Research job opportunities and enhance your networking skills</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Business Training" src={Part6Image}>
            <ul className="small">
              <li>Study the essential components of launching a corporate event planning business</li>
              <li>Learn how to market and promote your event planning services to your target audience</li>
              <li>Explore strategies to network with vendors and maintain professional relationships with clients</li>
              <li>Discover the four &ldquo;P&rdquo;s of marketing to help you build a digital marketing plan that reflects your brand and business objectives</li>
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
