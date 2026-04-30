import React from "react";
import { motion } from "motion/react";
import { HeartHandshake, Rocket, Award, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations";
import styles from "./trustWhyQC.module.scss";

export const TrustCounter = () => {
  const stats = [
    { num: "30K", title: "Students & Graduates", desc: "Inspiring the Next Generation of Professionals" },
    { num: "40", title: "Years in Business", desc: "Pioneering Education Since 1984" },
    { num: "15", title: "Industry Experts", desc: "Providing Insights for Real-World Success" }
  ];

  return (
    <section className={styles.trustCounter}>
      <div className={styles.container}>
        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className={styles.statItem}>
              <div className={styles.number}>
                {stat.num} <span className={styles.plus}>+</span>
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const WhyQC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Personalized 1-on-1 Mentorship",
      desc: "You are never alone. Every assignment is reviewed by a professional planner who provides tailored feedback."
    },
    {
      icon: Rocket,
      title: "Your Professional Launchpad",
      desc: "Graduate with the industry-standard templates, contracts, and pricing strategies you need to book clients immediately."
    },
    {
      icon: Award,
      title: "Specialization Mastery",
      desc: "Master niche services in Weddings, Corporate Events, or Luxury Celebrations to command higher professional fees."
    },
    {
      icon: Globe,
      title: "A Global Network",
      desc: "Join a community of planning professionals and stay connected long after you graduate."
    }
  ];

  return (
    <section className={styles.whyQC}>
      <div className={styles.container}>
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={styles.leftContent}
        >
          <span className="eyebrow">The QC Advantage</span>
          <h2>
            Why Aspiring Professionals Choose QC
          </h2>
          <p>
            We don't just teach event planning; we launch careers. Our pillars are designed to give you a competitive edge in a fast-paced industry.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.pillarsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
            <motion.div key={idx} variants={fadeInUp} className={styles.pillar}>
              <Icon className={styles.icon} />
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
