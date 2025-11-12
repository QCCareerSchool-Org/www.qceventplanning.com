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
          <p className="lead mb-0">The Event Planning Course is divided into four parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Fundamentals of Event Planning" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Dive into event planning and explore the ways in which you can create unique event concepts to wow your clients with events they'll remember forever</li>
              <li>Learn all about the event planning timeline so that you'll be ready to organize and prioritize important tasks</li>
              <li>Discover how you can work with clients to build a realistic event budget and study strategies to keep your costs on track</li>
              <li>Learn how to use the different components of an event from decor to the menu to make an event concept come to life</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Event Venues and Vendors" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Discover how to select ideal venues based on your clients' needs, budget and your event concept</li>
              <li>Study the pros and cons of different seating arrangements so that you'll be ready to create a plan that accommodates all your client's guests&mdash;and looks great at the same time!</li>
              <li>Learn how to interview caterers and plan a delicious menu with your event concept as well as dietary restrictions in mind</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="The Planning Process" src={Part3Image} className="mb-3">
            <ul className="small">
              <li>Learn how the planning process varies between different types of events including children's birthday parties, themed parties, holiday celebrations and religious rites</li>
              <li>Discover creative ways to celebrate milestone occasions that your clients will never forget</li>
              <li>Find out how you can assist clients during difficult times such as planning a funeral, as well as during happy moments including celebrations for religious rites</li>
              <li>Study the planning processes for industry and special events, as well as for charities and community partners to ensure you're well versed in all types of event planning</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Risk Management and Contingency Planning" src={Part4Image} className="mb-3">
            <ul className="small">
              <li>Practice identifying potential challenges you might face when planning and executing an event, and learn how to develop strategies to help you overcome them</li>
              <li>Learn to develop effective contingency plans to ensure your events run smoothly even if something doesn't go as planned</li>
              <li>Explore the types of insurance you may need to protect yourself and your clients from potential risks</li>
              <li>Rest assured knowing you're always well prepared!</li>
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
