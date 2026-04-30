import React from "react";
import { motion } from "motion/react";
import { Briefcase, Wine, Ticket, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/animations";
import styles from "./specializationsTraits.module.scss";

export const Specializations = () => {
  const specs = [
    { title: "Corporate & Business", salary: "$62,000 – $110,000+", desc: "Partner with brands for high-impact launches and conferences. Focus on brand storytelling and professional results.", icon: <Briefcase /> },
    { title: "Weddings & Social", salary: "$53,000 – $95,000+", desc: "Blend unrivaled design creativity with personal service to bring celebrations to life.", icon: <Wine /> },
    { title: "Public & Large-Scale", salary: "$57,000 – $105,000+", desc: "Lead the crowd at festivals and concerts. Master complex logistics, permits, and safety planning.", icon: <Ticket /> }
  ];

  return (
    <section className={styles.specializations}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Expand Your Skills</span>
          <h2>Event Planning Specialization & Income Potential</h2>
          <p>
            The most successful planners master advanced specializations to build a signature brand and maximize earning potential.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specs.map((spec, idx) => (
            <motion.div key={idx} variants={fadeInUp} className={styles.card}>
              <div className={styles.iconWrapper}>
                {spec.icon}
              </div>
              <h3>{spec.title}</h3>
              <p className={styles.salary}>{spec.salary}</p>
              <p className={styles.desc}>{spec.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Traits = () => {
  const traits = [
    { title: "The Organized Dreamer", desc: "You love big ideas, but you're also the one who makes the \"to-do\" list. You find satisfaction in seeing a plan come together perfectly." },
    { title: "The Natural Connector", desc: "You enjoy working with people and building relationships. Whether it's a client or a vendor, you're the bridge that brings everyone together." },
    { title: "The Creative Problem-Solver", desc: "When a challenge pops up, you don't panic—you pivot. You enjoy the thrill of thinking on your feet to keep things moving forward." },
    { title: "The Detail Enthusiast", desc: "You notice the little things that others miss—the perfect lighting, the flow of a room, or the timing of a toast. You know that small details create big memories." },
    { title: "The Goal-Oriented Learner", desc: "You're ready to take your natural talents and back them up with professional standards, specialized skills, and a portfolio you're proud to show off." }
  ];

  return (
    <section className={styles.traits}>
      <div className={styles.container}>
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className={styles.leftContent}
        >
          <h2>
            Is Event Planning<br/> Right for You?
          </h2>
          <p>
            You don't need a specific background to succeed in this industry—you just need the right instincts. If you recognize yourself in these traits, you already have the foundation of a great event planner.
          </p>
          
          <div className={styles.imageWrapper}>
            <img 
              src="/images/how-it-works-2/regenerated_image_1777552008276.png" 
              alt="Event planning strategy and vision"
            />
          </div>
        </motion.div>

        <motion.div 
          className={styles.rightContent}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.list}>
            {traits.map((trait, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={styles.listItem}>
                <CheckCircle2 className={styles.icon} />
                <div>
                  <h4>{trait.title}</h4>
                  <p>{trait.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.quote}>"Does this sound like you?"</p>
            <p className={styles.footerText}>If you have the passion, we have the professional roadmap to help you turn it into a profitable career.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
