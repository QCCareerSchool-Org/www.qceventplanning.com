import React from "react";
import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import useEmblaCarousel from "embla-carousel-react";
import { 
  ArrowRight, CheckCircle2, ChevronDown, CheckSquare, ChevronLeft, ChevronRight,
  TrendingUp, Wallet, Star, GraduationCap, LayoutDashboard, Search, MapPin
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations";
import { cn } from "../lib/utils";
import styles from "./pageSections.module.scss";

const Section = ({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className={cn(styles.section, className)}>
    <div className={styles.container}>
      {children}
    </div>
  </section>
);

export const Hero = () => {
  return (
    <Section className={styles.hero}>
      {/* Background Image with Overlay */}
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" 
          alt="Event planning background"
        />
        <div className={styles.overlay} />
        <div className={styles.gradient} />
      </div>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={styles.content}
      >
        <motion.h1 variants={fadeInUp}>
          How to Become an <br/><span>Event Planner</span>
        </motion.h1>
        <motion.p variants={fadeInUp}>
          Launch your career with the professional certification and industry standards required to maximize your earning potential. Discover the 2026 benchmarks for salary, education, and accelerated career paths.
        </motion.p>
      </motion.div>
    </Section>
  );
};

export const CareerStats = () => {
  return (
    <Section className={styles.careerStats}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        <div className={styles.header}>
          <motion.h2 variants={fadeInUp}>Your Career at a Glance</motion.h2>
        </div>
        
        <motion.div variants={fadeInUp} className={styles.statItem}>
          <GraduationCap className={styles.icon} />
          <h3>Entry Requirements</h3>
          <p>A professional certification and a digital portfolio—the modern standards for building client trust.</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className={styles.statItem}>
          <TrendingUp className={styles.icon} />
          <h3>Average Salary</h3>
          <p>From a median of $59,493 to over $101,310 for specialized experts. Your income grows with your expertise.</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className={styles.statItem}>
          <Star className={styles.icon} />
          <h3>Top Skills</h3>
          <p>Budgeting, AI-assisted logistics, vendor negotiation, and creative problem solving.</p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className={styles.statItem}>
          <LayoutDashboard className={styles.icon} />
          <h3>Fastest Path to Revenue</h3>
          <p>Online Certification</p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export const Responsibilities = () => {
  const responsibilities = [
    { title: "Creative Concepting", desc: "Designing the visual \"story\" and aesthetic flow of the event." },
    { title: "Expert Curation", desc: "Scouting the perfect venues and hand-picking an elite team of partners." },
    { title: "Strategic Budgeting", desc: "Making every dollar work harder to deliver high-end results without the stress." },
    { title: "Seamless Choreography", desc: "Developing a precise timeline so the event feels effortless for the host." },
    { title: "On-Site Leadership", desc: "Serving as the calm, confident director on event day—solving challenges before anyone else notices." }
  ];

  return (
    <Section className={styles.responsibilities}>
      <div className={styles.grid}>
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={styles.content}
        >
          <h2>
            What Does a <span>Professional</span> Event Planner Do?
          </h2>
          <p className={styles.description}>
            As a planner, you are the creative strategist behind every celebration. You'll organize and manage events from concept to completion, coordinating the logistics, vendors, budget, and timeline needed to bring an event to life.
          </p>
          
          <div className={styles.list}>
            <h3 className={styles.listHeader}>
              Your Core Responsibilities & Professional Impact
            </h3>
            {responsibilities.map((req, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={styles.listItem}>
                <CheckCircle2 className={styles.icon} />
                <div>
                  <h4>{req.title}</h4>
                  <p>{req.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/images/how-it-works-2/regenerated_image_1777561776477.png" 
            alt="Event planning team setting up a venue"
          />
        </motion.div>
      </div>
    </Section>
  );
};

export const Journey = () => {
  const steps = [
    { title: "Obtain Professional Certification", desc: "Master industry-standard fundamentals and high-impact skills like event design, contracts, and client management. Focused certification programs provide the technical authority clients demand." },
    { title: "Gain Real-World Skills", desc: "Build your \"event intuition\" through mentorship, practical assignments through your course, and assisting local planners." },
    { title: "Build a Digital Portfolio", desc: "Curate a signature showcase of your event concepts and mood boards. A professional portfolio proves your vision to potential clients before they book their first consultation." },
    { title: "Establish Your Professional Network", desc: "Connect with local venues and vendors. By building a trusted network, you become an invaluable resource for your clients." }
  ];

  return (
    <Section id="career-pathways" className={styles.journey}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">Your Journey to Success</span>
        <h2>4-Steps to Becoming an Event Planner</h2>
        <p>
          You don't need years of university to start your career. Follow this proven path to transform your passion into a professional brand.
        </p>
      </motion.div>

      <motion.div 
        className={styles.stepsGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.dottedLine}></div>

        {steps.map((step, idx) => (
          <motion.div key={idx} variants={fadeInUp} className={styles.stepItem}>
            <div className={styles.number}>
              {idx + 1}
            </div>
            <div className={styles.card}>
              <span className="eyebrow" style={{ color: 'var(--qc-color-gold)' }}>STEP {idx + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
