import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import styles from "./sliderFAQ.module.scss";

export const Testimonials = () => {
  const testimonials = [
    { name: "Jamie Cromar", course: "Event & Wedding Planning", quote: "“Being able to learn the business and how to work with clients is so amazing! QC Event School has been a fun and very positive experience for me.”", img: "https://i.pravatar.cc/150?u=jamie" },
    { name: "Sarah Kirkpatrick", course: "Event & Wedding Planning", quote: "“The value of the course was the feedback I received from my tutor. You can get professional feedback and advice on real situations which is invaluable!”", img: "https://i.pravatar.cc/150?u=sarahk" },
    { name: "Marianna Zimmerman", course: "Event & Wedding Planning", quote: "“QC Event School's course definitely prepared me for working in this field and starting my own business!”", img: "https://i.pravatar.cc/150?u=marianna" },
    { name: "Dawn Marie Clunas", course: "Event & Wedding Planning", quote: "“With QC I could live out my dream with an online course and expand my knowledge of the field while being able to continue professional working in it at the same time.”", img: "https://i.pravatar.cc/150?u=dawn" },
    { name: "Christina Smith", course: "Event & Wedding Planning", quote: "“The courses are extremely detailed and allow you to learn at your own pace. I totally recommend their event planning courses.”", img: "https://i.pravatar.cc/150?u=christina" }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section id="success-stories" className={styles.testimonialsSection}>
      <div className="w-full">
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {testimonials.map((test, idx) => (
              <div key={idx} className={styles.slide}>
                <div className={styles.slideContent}>
                  <div>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className={styles.quote}>{test.quote}</p>
                  </div>
                  <div className={styles.author}>
                    <img src={test.img} alt={test.name} />
                    <div>
                      <h4>{test.name}</h4>
                      <p>{test.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.pagination}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(index === selectedIndex && styles.active)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "Do I need a university degree to become an event planner?", a: "No. In the professional event world, your certification, practical experience, and a proven portfolio carry the most weight. The majority of independent planners and agencies prioritize your ability to execute a vision over a traditional four-year degree." },
    { q: "What is the best event planning school?", a: "The best program depends on your career goals. If you want to build a successful event planning business, you need a program that doesn't just teach theory but offers hands-on mentorship and business foundations. QC Event School is a leader because we bridge the gap between technical planning skills and the entrepreneurial tools needed to launch your own practice." },
    { q: "How much do event planners make?", a: "While the median salary in the industry is $59,493, specialized planners in luxury or corporate sectors often earn over $100,000. As a freelance business owner, your earning potential is even higher, limited only by your niche and client load." },
    { q: "How long does it take to get certified?", a: "Our certification is designed to be completed in 3 to 6 months. This allows you to enter the professional market and start building your business much faster than a multi-year academic path." }
  ];

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">FAQ</span>
          <h2>Becoming an Event Planner</h2>
          <p>
            We believe that transparency is the first step toward a successful partnership. Here is what you need to know about starting your career in event planning.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className={styles.accordion}>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className={styles.accordionItem}>
              <AccordionTrigger className={styles.trigger}>
                {faq.q}
                <div className={styles.iconWrapper}>
                   <ChevronDown />
                </div>
              </AccordionTrigger>
              <AccordionContent className={styles.content}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const FooterCTA = () => {
  return (
    <section className={styles.footerCTA}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Launch Your Event & Wedding Planning Career?</h2>
        <p>
          Gain the industry-standard IEWP™ certification through QC's mentored online programs. Start building your portfolio and booking clients in as little as 12 weeks.
        </p>
        <button className={styles.btn}>
          Explore Certification Programs
        </button>
      </motion.div>
    </section>
  );
};
