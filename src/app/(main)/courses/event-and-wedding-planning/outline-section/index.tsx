'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import Part1Image from './ep-part-1.jpg';
import Part2Image from './ep-part-2.jpg';
import Part3Image from './ep-part-3.jpg';
import Part4Image from './ep-part-4.jpg';
import Part5Image from './ep-part-5.jpg';
import Part6Image from './ep-part-6-option-1.jpg';
import Part7Image from './ep-part-7.jpg';

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
              <Accordion.Header><span className="lead fw-bold">The Fundamentals of Event and Wedding Planning</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Dive into event and wedding planning and explore the ways in which you can create unique event concepts to wow your clients with events they'll remember forever</li>
                      <li>Learn all about the event planning timeline so that you'll be ready to organize and prioritize important tasks</li>
                      <li>Discover how you can work with clients to build a realistic event budget and study strategies to keep your costs on track</li>
                      <li>Learn how to use the different components of an event from decor to the menu to make an event concept come to life</li>
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
              <Accordion.Header><span className="lead fw-bold">Event Venues and Vendors</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Discover how to select ideal venues based on your clients' needs, budget and your event concept</li>
                      <li>Study the pros and cons of different seating arrangements so that you'll be ready to create a plan that accommodates all your client's guests&mdash;and looks great at the same time!</li>
                      <li>Learn how to interview caterers and plan a delicious menu with your event concept as well as dietary restrictions in mind</li>
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
              <Accordion.Header><span className="lead fw-bold">The Planning Process</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Learn how the planning process varies between different types of events including children's birthday parties, themed parties, holiday celebrations and religious rites</li>
                      <li>Discover creative ways to celebrate milestone occasions that your clients will never forget</li>
                      <li>Find out how you can assist clients during difficult times such as planning a funeral, as well as during happy moments including celebrations for religious rites</li>
                      <li>Study the planning processes for industry and special events, as well as for charities and community partners to ensure you're well versed in all types of event planning</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part3Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">Risk Management and Contingency Planning</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Practice identifying potential challenges you might face when planning and executing an event, and learn how to develop strategies to help you overcome them</li>
                      <li>Learn to develop effective contingency plans to ensure your events run smoothly even if something doesn't go as planned</li>
                      <li>Explore the types of insurance you may need to protect yourself and your clients from potential risks</li>
                      <li>Rest assured knowing you're always well prepared!</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part4Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mb-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">The Ins and Outs of Wedding Planning</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Learn about the wedding timeline and study the process of planning your clients' dream wedding step-by-step</li>
                      <li>Discover how you can work within your clients' wedding budget by prioritizing the elements that matter most to each couple</li>
                      <li>Learn how to plan pre-wedding parties, from the bridal shower to the rehearsal dinner</li>
                      <li>Explore how you can help your clients create an appropriate guest list and select wedding stationary to begin their wedding planning journey</li>
                      <li>Study wedding attire and aesthetics so that you can help a bride choose the dress of her dreams, or find a bridesmaid dress that makes the whole bridal party happy</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part5Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
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
                    <Image src={Part6Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><span className="lead fw-bold">Running Your Event Planning Business</span></Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <ul className="small">
                      <li>Study the essential components of launching a thriving event planning business</li>
                      <li>Learn how to market and promote your event and wedding planning services to your target audience</li>
                      <li>Explore strategies to network with vendors and maintain professional relationships with clients</li>
                      <li>Learn effective project management strategies to keep your business running efficiently</li>
                      <li>Discover tips to help you plan a styled shoot and build a high-quality professional portfolio that clients won't be able to resist</li>
                    </ul>
                  </div>
                  <div className="col-6 d-none d-lg-block">
                    <Image src={Part7Image} alt="" className="img-fluid" style={{ borderRadius: '1.5rem' }} />
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
