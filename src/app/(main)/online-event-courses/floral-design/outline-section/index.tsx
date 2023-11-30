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
  <section id="outline" className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Corporate Event Planning Course is divided into 6 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <CourseOutline title="The Floral Design Industry" src={Part1Image} open className="mb-3">
            <ul className="small">
              <li>Explore the different paths you can follow to build a career in the floral design industry</li>
              <li>Study the history of floral design, following the industry's popularity from Ancient Egypt all the way to modern times</li>
              <li>Learn about the most common types of arrangements you'll design throughout your career and how your clients will use them</li>
              <li>Discover the most popular flowers in the industry and learn how they'll contribute to your designs</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="The Fundamentals of Floral Design" src={Part2Image} className="mb-3">
            <ul className="small">
              <li>Learn about plant anatomy and plant care to ensure you can create healthy, long-lasting designs for your clients</li>
              <li>Discover the tools and supplies you'll need to care for your flower materials and build your designs</li>
              <li>Learn how to process and prepare your flowers and foliage for a design with step-by-step instructions</li>
              <li>Explore the mechanics involved in structuring a variety of floral designs</li>
              <li>Study the principles and elements of design and learn how to combine these concepts with your client's goals to design beautiful arrangements</li>
              <li>Learn how to create a floral design plan to account for every element of your design</li>
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
          <CourseOutline title="Decorative Arrangements" src={Part4Image} className="mb-3">
            <ul className="small">
              <li>Discover the essential design considerations you'll need to account for when you create decorative arrangements, including the following: vase designs, foam and wire arrangements and sprays</li>
              <li>Follow step-by-step instructions led by floral design expert, Renee Tucci. Get inspired to create beautiful designs!</li>
              <li>Learn about flower selection and placement for decorative arrangements</li>
              <li>Explore different methods to polish your designs using decorative accessories</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Flowers to Wear & Carry" src={Part5Image} className="mb-3">
            <ul className="small">
              <li>Learn how to design flowers to wear and carry, including bouquets, boutonnieres and corsages</li>
              <li>Discover how you can create customized designs to coordinate with and enhance your client's special events and occasions</li>
              <li>Follow step-by-step instructions and detailed video tutorials to learn how to structure and design bouquets, boutonnieres and corsages</li>
              <li>Learn techniques to keep these designs fresh even when they can't be stored in water</li>
            </ul>
          </CourseOutline>
          <CourseOutline title="Advanced Floral Designs" src={Part6Image}>
            <ul className="small">
              <li>Discover how you can apply the fundamental floral design techniques you've learned so far to create advanced designs for your clients</li>
              <li>Follow step-by-step instructions and video examples to try your hand at creating specialty floral designs, including garlands, wreaths, large arrangements and aisle decor for events and special occasions</li>
              <li>Learn how you can use faux flowers to improve your designs and accommodate your clients' special requests</li>
              <li>Expand your creativity and skill set by experimenting with advanced designs</li>
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
