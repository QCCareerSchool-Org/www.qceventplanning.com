import Link from 'next/link';

import { Card } from './_components/card';
import HeroDesktop from './hero-desktop.jpg';
import HeroMobile from './hero-mobile.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { CourseCode } from '@/domain/courseCode';

const enrollHref = 'https://enroll.qceventplanning.com/all-access-program';

const courseCodes: CourseCode[] = [ 'aa' ];

const testimonialIds = [ 'TE-0017', 'TE-0025', 'TE-0026', 'TE-0027', 'TE-0028', 'TE-0015' ];

const AllAccessProgramPage: PageComponent = () => {
  return (
    <>
      <CourseJsonLd courseCode="aa" />
      <section className="bg-navy text-white text-center">
        <BackgroundImage src={HeroDesktop} mobile={{ src: HeroMobile, breakpoint: 'md' }} priority />
        <div className="container">
          <div className="eyebrow text-shadow mb-3"><strong>Best Value</strong> Earn Your Master Planner Certificate</div>
          <h1 className="text-shadow mb-4">Join the All-Access Program</h1>
          <p className="lead fw-medium text-shadow mb-5">Maximize Your Earning Potential</p>
          <div className="d-flex justify-content-center gap-4">
            <Link href={enrollHref} className="btn btn-primary shadow">Enroll Now</Link>
            <Link href="#includede" className="btn btn-outline-light shadow">See What's Included</Link>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="mb-3">Build a Full-Service Event Business</h2>
              <p className="mb-0">Get instant access to the complete QC Event Planning online curriculum and earn up to ten certifications at your own pace. Complete the courses that align with your goals—or finish them all to graduate with your Master Planner Certificate.</p>
            </div>
          </div>
          <div className="text-start row g-4 mb-5">
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Master Every Type of Event.</h3>
                Develop the specialized planning expertise to confidently handle weddings, corporate events, luxury celebrations, live events, and more.
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Say Yes to More Opportunities.</h3>
                Expand your services and build an adaptable business so you never have to turn away a client.
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Fast-Track Your Career.</h3>
                Graduate in under a year, and move quickly from training to booking paid projects.
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Command Higher Fees.</h3>
                Deliver a polished, professional, full-service experience that justifies premium pricing.
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Earn Recognized Credentials.</h3>
                Prove your expertise and graduate with a certification for every course completed—plus your Master Planner Certificate.
              </Card>
            </div>
            <div className="col-12 col-md-6 col-xl-4 d-flex">
              <Card>
                <h3 className="h6">Build confidence through comprehensive training.</h3>
                Complete hands-on assignments and receive personalized expert feedback so you're fully prepared for any event.
              </Card>
            </div>
          </div>
          <Link href={enrollHref} className="btn btn-primary">Become a Master Planner</Link>

          <p className="mt-3 text-center text-black text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>10 Professional Certifications • Graduate in Under a Year • Enjoy Lifetime Access</p>
        </div>
      </section>
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <section>
        <div className="container">
          <h2>What You'll Learn</h2>
          <p className="lead">Get the Most Comprehensive Training Available—with Expert Mentorship Included</p>
          <p>Unlock our complete library of online, self-paced event planning courses. Engage with interactive lessons and expert-led video training, complete practical assignments, and receive personalized mentor feedback as you develop confident, career-ready skills.</p>
          <p><strong>Courses include:</strong></p>
          <ul>
            <li><strong>Event & Wedding Planning:</strong> Plan seamless weddings and events from concept to execution, mastering timelines, budgets, vendors, and client experience.</li>
            <li><strong>Corporate Event Planning:</strong> Lead professional events from company functions to public gatherings, mastering event logistics and risk management.</li>
            <li><strong>Event Decor:</strong> Elevate the guest experience by designing unforgettable event aesthetics.</li>
            <li><strong>Luxury Wedding & Event Planning:</strong> Attract high-end clients and confidently plan upscale weddings and celebrations.</li>
            <li><strong>Destination Wedding Planning:</strong> Manage travel, remote venues, and international logistics with expertise.</li>
            <li><strong>Promotional Event Planning:</strong> Design high-impact product launches, industry events and brand experiences that command attention.</li>
            <li><strong>Festivals & Live Events:</strong> Coordinate complex live productions and large-scale public events from start to finish.</li>
            <li><strong>Accelerate Your Business:</strong> Achieve your business goals faster with proven strategies and guidance from a professional planner.</li>
          </ul>
        </div>
      </section>
      <ILEASection />
      <section>
        <div className="container">
          <h2>Certifications That Prove Your Expertise</h2>
          <p className="lead">Build Trust with Professional Credentials</p>
          <p>Prove your range of skills and expertise to prospective clients and your professional network.</p>
          <ul>
            <li><strong>Individual Course Certificates:</strong> Demonstrate your mastery in 9 specific niche areas.</li>
            <li><strong>The Master Planner Certificate:</strong> A prestigious capstone credential that signals you are a full-service expert.</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Who This Program Is For</h2>
          <p className="lead">The Strategic Choice for Planners</p>
          <p>This program is designed for aspiring and professional planners who want to build a career that lasts. Instead of training for one path, you'll graduate prepared to serve <strong>any client, at any stage of your career</strong>.</p>
          <p>The All-Access Program is ideal if you want to:</p>
          <ul>
            <li><strong>Capture every opportunity</strong> and stop leaving revenue on the table.</li>
            <li><strong>Establish credibility quickly</strong> with professional certifications.</li>
            <li><strong>Build a business that can grow.</strong> Choose your specialty later—without being limited now</li>
          </ul>
        </div>
      </section>
      <PaymentPlanSection courseCodes={courseCodes} />
      <section>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
                <AccordionFAQ heading="How do QC Event School's courses work?" className="mb-3">
                  <p>QC Event School courses are fully online and self-paced, so you can learn whenever it fits your schedule. Each course combines interactive lessons with expert-led videos, guiding you through the concepts step by step. You'll complete practical assignments that let you apply what you've learned in real-world scenarios. After each assignment, an experienced industry mentor provides personalized feedback to help you refine your skills. This step-by-step approach ensures you graduate confident and ready to plan events for real clients.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Who will be my course mentor?" className="mb-3">
                  <p>You'll learn directly from our team of experienced tutors and industry mentors who have planned weddings, corporate events, luxury celebrations, and more. You'll be paired with a dedicated program for each course that you complete in the All-Access Program. Your mentors will review your work, provide personalized audio feedback on your assignments, and share real-world insights from their careers. With their support, you'll build practical skills, gain confidence, and be ready to succeed in the event industry.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="How long do I have to complete the program?" className="mb-3">
                  <p>You have a full year to complete the program. However, because the program is entirely self-paced, you'll be able to graduate well before that. If you prefer to take your time, simply reach out to the school—we'll be happy to arrange an extension.</p>
                  <p>Plus, your access doesn't end at graduation. You'll also enjoy <strong>lifetime access</strong> to all course materials and any future updates to the curriculum.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Are there payment plans?" className="mb-3">
                  <p>Yes. You can choose to pay in full today and receive an additional discount, or select an interest-free installment plan at checkout.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="What is the refund policy?" className="mb-3">
                  <p>We offer a <strong>21-day money-back guarantee</strong>. If the program isn't the right fit for your goals, we will provide a full refund.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GoogleReviewSection />
      <GetStartedSection
        title="Ready to start your event planning career?"
        text="Gain complete access to every QC Event Planning course and graduate ready to launch a professional event business that can handle any client or occasion."
        buttonText="Become a Master Planner"
        buttonHref={enrollHref}
      />
    </>
  );
};

export default AllAccessProgramPage;
