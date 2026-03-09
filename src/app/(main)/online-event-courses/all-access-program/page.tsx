import Link from 'next/link';

import { Card } from './_components/card';
import { CourseDescription } from './_components/courseDescription';
import { SuccessStoriesSection } from './_components/successStories';
import CheckShieldIcon from './check-shield.svg';
import HeroDesktop from './hero-desktop.jpg';
import HeroMobile from './hero-mobile.jpg';
import { IconCircle } from './iconCircle';
import LineChartIcon from './line-chart.svg';
import RocketIcon from './rocket.svg';
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { aapCourseCodes, type CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetch';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';

const enrollHref = 'https://enroll.qceventplanning.com/all-access-program';

const courseCodes: CourseCode[] = [ 'aa' ];

const testimonialIds = [ 'TE-0017', 'TE-0025', 'TE-0026', 'TE-0027', 'TE-0028', 'TE-0015' ];

const col1 = 'col-12 col-md-6 col-xl-4 d-flex';
const col2 = 'col-12 col-lg-6';

const AllAccessProgramPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const [ price, originalPrice ] = await Promise.all([
    fetchPrice(courseCodes, countryCode, provinceCode),
    fetchPrice(aapCourseCodes, countryCode, provinceCode),
  ]);

  return (
    <>
      <CourseJsonLd courseCode="aa" />
      <section className="bg-navy text-white text-center">
        <BackgroundImage src={HeroDesktop} mobile={{ src: HeroMobile, breakpoint: 'md' }} priority />
        <div className="container">
          <div className="eyebrow text-shadow mb-3"><strong>Best Value:</strong> Earn Your Master Planner Certificate</div>
          <h1 className="text-shadow mb-4">Join the All-Access Program</h1>
          <p className="lead fw-medium text-shadow mb-5">Maximize Your Earning Potential</p>
          <div className="d-flex justify-content-center gap-4">
            <Link href={enrollHref} className="btn btn-primary shadow">Enroll Now</Link>
            <Link href="#included" className="btn btn-outline-light shadow">See What's Included</Link>
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
            <div className={col1}>
              <Card>
                <h3 className="h6">Master Every Type of Event.</h3>
                Develop the specialized planning expertise to confidently handle weddings, corporate events, luxury celebrations, live events, and more.
              </Card>
            </div>
            <div className={col1}>
              <Card>
                <h3 className="h6">Say Yes to More Opportunities.</h3>
                Expand your services and build an adaptable business so you never have to turn away a client.
              </Card>
            </div>
            <div className={col1}>
              <Card>
                <h3 className="h6">Fast-Track Your Career.</h3>
                Graduate in under a year, and move quickly from training to booking paid projects.
              </Card>
            </div>
            <div className={col1}>
              <Card>
                <h3 className="h6">Command Higher Fees.</h3>
                Deliver a polished, professional, full-service experience that justifies premium pricing.
              </Card>
            </div>
            <div className={col1}>
              <Card>
                <h3 className="h6">Earn Recognized Credentials.</h3>
                Prove your expertise and graduate with a certification for every course completed—plus your Master Planner Certificate.
              </Card>
            </div>
            <div className={col1}>
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
      <TestimonialWallSection testimonialIds={testimonialIds} className="bg-light" />
      <section id="included">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-11 col-xl-10 text-center">
              <div className="eyebrow text-primary mb-4">What You'll Learn</div>
              <h2 className="h3 mb-4">Get the Most Comprehensive Training Available—with Expert Mentorship Included</h2>
              <p className="mb-0">Unlock our complete library of online, self-paced event planning courses. Engage with interactive lessons and expert-led video training, complete practical assignments, and receive personalized mentor feedback as you develop confident, career-ready skills.</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <h3 className="h5 pb-2 mb-0" style={{ borderBottom: '1px solid #ccc' }}><strong>Courses include:</strong></h3>
            </div>
          </div>
          <div className="row g-4">
            <div className={col2}>
              <CourseDescription heading="Event & Wedding Planning">
                Plan seamless weddings and events from concept to execution, mastering timelines, budgets, vendors, and client experience.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Corporate Event Planning">
                Lead professional events from company functions to public gatherings, mastering event logistics and risk management.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Event Decor">
                Elevate the guest experience by designing unforgettable event aesthetics.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Luxury Wedding & Event Planning">
                Attract high-end clients and confidently plan upscale weddings and celebrations.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Destination Wedding Planning">
                Manage travel, remote venues, and international logistics with expertise.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Promotional Event Planning">
                Design high-impact product launches, industry events and brand experiences that command attention.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Festivals & Live Events">
                Coordinate complex live productions and large-scale public events from start to finish.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Accelerate Your Business">
                Achieve your business goals faster with proven strategies and guidance from a professional planner.
              </CourseDescription>
            </div>
            <div className={col2}>
              <CourseDescription heading="Virtual Events Training">
                Master virtual platforms, audience engagement, and virtual event logistics to plan and deliver online events.
              </CourseDescription>
            </div>
          </div>
          {price.success && originalPrice.success && (
            <div className="text-center mt-5 pt-5" style={{ borderTop: '1px solid #ccc' }}>
              <div className="text-black" style={{ fontSize: '1.375rem' }}><strong>Total Value:</strong> <span style={{ textDecoration: '2px rgba(255, 34, 74, 0.7) line-through' }}>{originalPrice.value.currency.symbol}{formatPrice(originalPrice.value.cost)}</span></div>
              <div className="d-inline-block bg-primary text-black rounded-pill py-2 px-4 mt-2 mb-2" style={{ fontSize: '1.375rem' }}>Your Price: {price.value.currency.symbol}{formatPrice(price.value.plans.full.total)}</div>
              <div className="fst-italic mt-1">Or Get Started for Only {price.value.currency.symbol}{formatPrice(price.value.plans.part.deposit)}</div>
            </div>
          )}
        </div>
      </section>
      <ILEASection />
      <SuccessStoriesSection className="bg-light" />
      <section>
        <div className="container text-center">
          <div className="eyebrow text-primary mb-3">Who This Program Is For</div>
          <h2 className="mb-3">The Strategic Choice for Planners</h2>
          <p className="mb-5">This program is designed for aspiring and professional planners who want to build a career that lasts. Instead of training for one path, you'll graduate prepared to serve <strong>any client, at any stage of your career</strong>.</p>
          <h3 className="h4 mb-3">The All-Access Program is ideal if you want to:</h3>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-10 col-lg-4">
              <div className="mb-3"><IconCircle><LineChartIcon /></IconCircle></div>
              <strong>Capture every opportunity and stop leaving revenue on the table.</strong>
            </div>
            <div className="col-12 col-md-10 col-lg-4">
              <div className="mb-3"><IconCircle><CheckShieldIcon /></IconCircle></div>
              <strong>Establish credibility quickly with professional certifications.</strong>
            </div>
            <div className="col-12 col-md-10 col-lg-4">
              <div className="mb-3"><IconCircle><RocketIcon /></IconCircle></div>
              <strong>Build a business that can grow. Choose your specialty later—without being limited now.</strong>
            </div>
          </div>
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
      <GoogleReviewSection className="bg-light" />
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
