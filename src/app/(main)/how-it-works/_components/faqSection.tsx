import type { FC } from 'react';

import { AccordionFAQ } from '@/components/accordionFAQ';

export const FAQSection: FC = () => (
  <section>
    <div itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
            {faqItems.map(item => (
              <AccordionFAQ heading={item.question} className="mb-3" key={item.question}>
                <p>{item.answer}</p>
              </AccordionFAQ>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqItems = [
  {
    question: 'Do I need a university degree to become an event planner?',
    answer: 'No. Event planning clients and employers often value practical skills, confidence, certification, and a strong portfolio. QC focuses on career-ready training so you can understand both the creative and business sides of planning.',
  },
  {
    question: 'What is the best event planning school?',
    answer: 'The best program depends on your goals. If you want to start a business or move into professional planning quickly, look for flexible training, expert mentorship, practical assignments, and business support. QC Event School is built around those priorities.',
  },
  {
    question: 'How much do event planners make?',
    answer: 'Event planner income varies by location, niche, experience, and whether you work for an employer or run your own business. Specialized planners can increase their earning potential by developing advanced services and a strong professional network.',
  },
  {
    question: 'How long does it take to get certified?',
    answer: 'QC courses are self-paced. Many students complete their training in 3 to 6 months, and you have up to a full year to complete your course if you prefer a slower schedule.',
  },
];
