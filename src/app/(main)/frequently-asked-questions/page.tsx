import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';
import { Question } from './question';
import type { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  alternates: {
    canonical: '/frequently-asked-questions',
  },
};

const FAQPage: PageComponent = () => {
  const { countryCode } = getData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <div className={styles.faq} itemScope itemType="https://schema.org/FAQPage">
      <section>
        <div className="container text-center">
          <h1>FAQ</h1>
          <ul className={styles.nav}>
            <li><Link href="#beforeYouEnroll">Before You Enroll</Link></li>
            <li><Link href="#whileYouLearn">While You Lean</Link></li>
            <li><Link href="#afterYouGradutate">After You Graduate</Link></li>
            <li><Link href="#aboutQCEventSchool">About QC Event School</Link></li>
          </ul>
        </div>
        <div id="beforeYouEnroll" className="mt-s" style={{ scrollMarginTop: 120 }}>
          <div className="container">
            <h2 className="h3 mb-3">Before You Enroll</h2>
            {countryCode === 'CA' && (
              <Question heading="Can I claim my course tuition on my taxes?">
                <p>Yes, and you can have more than <Link href="/canadian-tax-credits">50% of your course fees covered</Link>! QC is a Certified Education Institution with Employment and Social Development Canada. At the end of the year, we'll send you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund. <Link href="/canadian-tax-credits">Learn more about the Canadian tax credits here</Link>.</p>
              </Question>
            )}
            <Question heading="How do I know QC Event School is legitimate?">
              <p>We have been specializing in distance education since 1984. We operate six faculties under the <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer">QC Career School</a> banner. We are accredited by the Better Business Bureau and <a href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175/" target="_blank" rel="noreferrer">maintain an A+ rating</a> with them year after year.</p>
              <p>If you are unsure about student satisfaction, we invite you to check out <a href="https://www.facebook.com/QCEventPlanning/" target="_blank" rel="noreferrer">our Facebook page</a> for student testimonials. We also feature current students and graduates from the event planning school on our <Link href="/blog/category/graduate-features">Pointers for Planners blog</Link>.</p>
            </Question>
            <Question heading="Do I need prior training or experience?">
              <p>You do not need any previous education or experience in the event planning industry to succeed in our event planning courses. Our foundation event courses are designed to start you at a beginner's level. By the time you graduate, you will be able to work in the field!</p>
            </Question>
            <Question heading="Do you offer flexible payment plans?">
              <p>Yes! We offer two different tuition payment plans for QC students. Choose the option that best suits your needs, and set your own payment schedule.</p>
              <p>Here are the payment options for your event planning courses:</p>
              <ul>
                <li>Full, up-front payment during the time of enrollment&mdash;get a great discount!</li>
                <li>Monthly installment payments: 1 deposit payment and small monthly installments&mdash;get more time to pay off your fees!</li>
              </ul>
              <p><Link href="/online-event-courses">Learn more about each payment plan here.</Link></p>
              <p>If you choose to pay your tuition in an installment payment plan, you can choose the date your payments are processed. This adds another level of convenience unique to QC Event School! <Link href="/contact-us">Contact the Student Support Team</Link> to find the perfect payment option for you.</p>
              <p>If you would you like to adjust the date your payments come out, contact the Student Support Team to find the perfect payment option for you.</p>
            </Question>
            <Question heading="What's included in the tuition?">
              <p>Your tuition covers the cost of your online instructional materials and video, knowledge checks, access to the Online Student Center and your virtual community, and your certificate upon course completion. As part of your online event planning course fees, you'll also receive career advice and insider secrets from your tutor, an event planning professional.</p>
              <p>Our goal is to set you up with the tools you need to complete your event planning courses with flying colors.</p>
            </Question>
            <Question heading="Can I take these courses if I want to just explore the industry but am not necessarily interested in a new career?">
              <p>Absolutely. Perhaps you'd like to learn how to plan an upcoming wedding, organize events for fun, or add new skills to your resume. Whatever your reason, our training will be very useful to you even if you do not wish to work in the industry professionally.</p>
            </Question>
            <Question heading="Will I receive a discount if I enroll with a friend or colleague?">
              <p>Yes! Groups of two or more are eligible for a special discount when you enroll. Simply contact <Link href="/contact-us">contact QC's Student Support Team</Link>, and we'll help you get started.</p>
            </Question>
            <Question heading="Do you offer a military discount?">
              <p>QC Event School is pleased to offer a military discount of 10% for current members of the forces. The discount process requires you to submit proof of identification to the School. Note that this discount is only applicable when enrolling using one of our payment plans. Please <Link href="/contact-us">contact Student Support services</Link> for more information.</p>
            </Question>
            <Question heading="Can I take a specialization course without any prior experience?">
              <p>Students enrolling in the <Link href="/online-event-courses/luxury-wedding-and-event-planning">Luxury Wedding &amp; Event Planning</Link> course and the <Link href="/online-event-courses/destination-wedding-planning">Destination Wedding Planning</Link> course should have taken a foundation event planning course with us, are certified by another school, or have working experience as planners. The specialization courses help planners learn how to work with specialty clients and assume the student has a background in event and wedding planning.</p>
            </Question>
            <Question heading="When can I start my courses?">
              <p>QC Event School offers self-paced courses that you complete online. There are no semester intake days or enrollment deadlines. You can start as soon as 1 business day after you enroll.</p>
              <p>Once you enroll, you will be emailed your Online Student Center login credentials. The Student Center is where you'll access all your course materials and submit your coursework for tutor feedback.</p>
            </Question>
          </div>
        </div>
        <div id="whileYouLearn" className="mt-s" style={{ scrollMarginTop: 120 }}>
          <div className="container">
            <h2 className="h3 mb-3">While You Learn</h2>
            <Question heading="How long will it take to complete the course?">
              <p>QC's courses are self-paced&mdash;this means you can work on it whenever it's most convenient for you! With QC's flexible online training, you have no assignment deadlines or exams to worry about. Complete and submit your assignments at your own pace. There's no rush!</p>
              <p>As a rough guideline, most people take about 10 to 12 weeks to complete their course when working on it a couple of hours per week. You have a full two years to complete the course starting from your date of enrollment. For a better idea of what your workload will be like, take a look at the <Link href="/online-event-courses/event-and-wedding-planning#outline">Event &amp; Wedding Planning course curriculum</Link>.</p>
            </Question>
            <Question heading="What if I get stuck on an assignment?">
              <p>You are learning from home but you are in no way alone. You can <Link href="/contact-us">contact our Student Support Team</Link> for assignment help as often as you would like. Every question will be answered.</p>
            </Question>
            <Question heading="What if I decide the course isn't right for me?">
              <p>Not to worry, we offer a no-risk <Link href="/about-qc#guarantee">21-day money-back guarantee</Link>. If you decide the course isn't suited for you, simply contact the School for a full tuition refund.</p>
            </Question>
            <Question heading="Will I receive a certificate at the end of the course?">
              <p>Yes. You will receive your certificate once you complete the course with a passing grade of a C- and pay off your tuition balance.</p>
            </Question>
          </div>
        </div>
        <div id="afterYouGradutate" className="mt-s" style={{ scrollMarginTop: 120 }}>
          <div className="container">
            <h2 className="h3 mb-3">After You Graduate</h2>
            <Question heading="Do you offer job placements after the course is complete?">
              <p>Once you graduate, it is your responsibility to seek employment. QC provides students with the professional training required to work in the industry as well as business training to help you start your own business if you so desire.</p>
            </Question>
            <Question heading="Will I need any training in addition to QC's courses to become a professional event and wedding planner?">
              <p>No. Our courses provide you with all the training you need to excel in the industry. Your professional event planner certification from QC Event School improves your credibility and provides you with a competitive advantage in the field.</p>
            </Question>
            <Question heading="Can I start my own business after graduating from QC Event School?">
              <p>Yes! QC's online event planning courses include complete business training&mdash;these units are completely optional for you to do! You will learn how to set up and promote your planning services. You will also receive professional advice from your experienced tutors during and after your event course.</p>
            </Question>
            <Question heading="Do I have to pay an annual fee to QC to keep my certification as an event planner?">
              <p>No. Unlike some other online event planning programs, QC recognizes your right to use your professional planning certification and designation free of charge for life.</p>
            </Question>
            <Question heading="How will the School help me get started once I've finished the course?">
              <p>Each one of our courses includes full business training. You will learn how to start up your event planning business right from scratch.</p>
              <p>We also host a variety of free career resources for students and graduates in our Online Student Center.</p>
              <p>Even long after you have completed your course, we will continue to offer you support and guidance once you enter into the field. There is absolutely no charge for this.</p>
            </Question>
            <Question heading="Do you offer discounts for returning graduates?">
              <p>Yes, we do! We are delighted to offer both students and graduates 50% off each additional course they enroll in. <Link href="/contact-us">Contact Student Support</Link> to find out how much you can save by enrolling in multiple courses.</p>
            </Question>
          </div>
        </div>
        <div id="aboutQCEventSchool" className="mt-s" style={{ scrollMarginTop: 120 }}>
          <div className="container">
            <h2 className="h3 mb-3">About QC Event School</h2>
            <Question heading="What's the School's phone number?">
              <p className="lead mb-2"><a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a></p>
              <p>You can also find more ways to contact us on our <Link href="/contact-us">contact page</Link>.</p>
            </Question>
            <Question heading="Is the School a member of the Better Business Bureau?">
              <p>Yes. QC Event School is fully accredited with the Better Business and have maintained an A+ rating with them since 2004. <a href="https://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-career-school-in-ottawa-on-4175" target="_blank" rel="noreferrer">Check out our listing here</a>.</p>
            </Question>
            <Question heading="Can I be a QC partner?">
              <p>If you're interested in partnering with us, you can join our Affiliate Program! QC's Affiliate Program is an incentive to help students, graduates, and business partners increase their salary through referral web traffic. By simply placing a unique link on your website or social media profiles, any enrollments from traffic you send to QC will earn you a commission. <a href="https://affiliates.qccareerschool.com" target="_blank" rel="noreferrer">You can learn more about the program here</a>.</p>
            </Question>
            <Question heading="Are your courses approved by the International Live Events Association?">
              <p>Yes, our professional event certification courses have been approved by the International Live Events Association which means that our content has met their rigorous standards. We are committed to offering students high quality training in event planning. It's completely optional to do so, but you can sign up for an ILEA membership when you're ready to start your business.</p>
              <p>Other associations you can join include…</p>
              <ul>
                <li>Association of Bridal Consultants (ABC)</li>
                <li>Association for Wedding Planners International (AFWPI)</li>
                <li>International Festival and Events Association (IFEA)</li>
                <li>New Zealand Association of Event Professionals (NZEA)</li>
              </ul>
            </Question>
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 text-center">
              <h2 className="mb-3">Have Another Question?</h2>
              <p className="lead mb-3">Feel free to contact the School anytime to learn more about payment plans, career options for event planners, and studying online!</p>
              <Link href="/contact-us" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
