import type { FC } from 'react';

import { AccordionFAQ } from '@/components/accordionFAQ';

export const FAQSection: FC = () => (
  <section>
    <div itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-3 text-center">FAQ: Becoming an Event Planner</h2>
            <p className="lead mb-5 text-center">We believe that transparency is the first step toward a successful partnership. Here is what you need to know about starting your career in event planning.</p>
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
    answer: 'No. In the professional event world, your certification, practical experience, and a proven portfolio carry the most weight. The majority of independent planners and agencies prioritize your ability to execute a vision over a traditional four-year degree.',
  },
  {
    question: 'What is the best event planning school?',
    answer: 'The best program depends on your career goals. If you want to build a successful event planning business, you need a program that doesn\'t just teach theory but offers hands-on mentorship and business foundations. QC Event School is a leader because we bridge the gap between technical planning skills and the entrepreneurial tools needed to launch your own practice.',
  },
  {
    question: 'How much do event planners make?',
    answer: 'While the median salary in the industry is $59,493, specialized planners in luxury or corporate sectors often earn over $100,000. As a freelance business owner, your earning potential is even higher, limited only by your niche and client load.',
  },
  {
    question: 'How long does it take to get certified?',
    answer: 'Our certification is designed to be completed in 3 to 6 months working on the course part time. This allows you to enter the professional market and start building your business much faster than a multi-year academic path.',
  },
];
