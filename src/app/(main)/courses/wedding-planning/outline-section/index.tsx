'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Part1Image from './part-1.jpg';
import Part2Image from './part-2.jpg';
import Part3Image from './part-3.jpg';

export const OutlineSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-xl-10 text-center">
          <h2 className="mb-3">Course Outline</h2>
          <p className="lead mb-0">The Event and Wedding Planning Course is divided into 7 parts, each comprising separate training units.</p>
        </div>
        <div className="col-12 col-xl-10">
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">The Ins and Outs of Wedding Planning</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Learn about the wedding timeline and study the process of planning your client's dream wedding step-by-step</li>
                      <li>Discover how you can work within your clients' wedding budget by prioritizing the elements that matter most to each couple</li>
                      <li>Learn how to plan pre-wedding parties, from the bridal shower to the rehearsal dinner</li>
                      <li>Explore how you can help your clients create an appropriate guest list and select wedding stationery to begin their wedding planning journey</li>
                      <li>Study wedding attire and aesthetics so that you can help a bride choose the dress of her dreams, or find a bridesmaid dress that makes the whole bridal party happy</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part1Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">Wedding Day Coordination</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Discover what's involved in both civil and religious wedding ceremonies, and learn how you can personalize the ceremony to suit your clients perfectly</li>
                      <li>Learn how to execute a seamless reception by coordinating with vendors, entertainers and other wedding staff</li>
                      <li>Study how weddings are celebrated across a variety of religions and cultures to discover tips to bring traditions together from multiple backgrounds</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part2Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">Running Your Event Planning Business</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Study the essential components of launching a lucrative wedding planning business</li>
                      <li>Learn how to market and promote your event and wedding planning services</li>
                      <li>Explore strategies to network with vendors and maintain professional relationships with clients</li>
                      <li>Learn effective project management strategies to keep your business running efficiently</li>
                      <li>Discover tips to help you plan a styled shoot and build a high-quality professional portfolio that potential clients can't resist</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part3Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
