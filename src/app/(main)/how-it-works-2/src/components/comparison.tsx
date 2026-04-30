import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeInUp } from "../lib/animations";
import { cn } from "../lib/utils";
import styles from "./comparison.module.scss";

const comparisonData = [
  {
    feature: "School Specialization",
    qcHtml: "Expertise in event education & business training",
    uniHtml: "Broad focus in hospitality",
    certsHtml: "Generalized training across multiple industries"
  },
  {
    feature: "Program Focus",
    qcHtml: "Professional planning skills, entrepreneurship and career building",
    uniHtml: "Academic theory",
    certsHtml: "General skills overview with some business training"
  },
  {
    feature: "Career Outcome",
    qcHtml: <span><strong>Direct Entry:</strong> Launch your own business or become a lead planner for an existing company</span>,
    uniHtml: <span><strong>Hospitality route:</strong> Gain experience in entry-level positions</span>,
    certsHtml: <span><strong>Support Roles:</strong> Foundational knowledge for assistant positions; additional training preferred for business ownership</span>
  },
  {
    feature: "Course Format",
    qcHtml: "Total flexibility with 100% online lessons, expert-led videos, self-paced practical assignments and mentor feedback",
    uniHtml: "Primarily in-person with some online options; set class schedules & rigid schedules",
    certsHtml: "Self-guided format with online lessons"
  },
  {
    feature: "Mentorship",
    qcHtml: "7 personalized 1-on-1 reviews from an industry expert",
    uniHtml: "Limited Interaction",
    certsHtml: "Self-Guided (Email / Video Support)"
  },
  {
    feature: "Business Training",
    qcHtml: "Complete Business Training (Contract templates, business tools & planning software included)",
    uniHtml: "General Business Theory",
    certsHtml: "Basic Overview"
  },
  {
    feature: "Credential",
    qcHtml: "Globally recognized professional certification",
    uniHtml: "Bachelor’s Degree",
    certsHtml: "Career Diploma / Certificate"
  },
  {
    feature: "Duration",
    qcHtml: <span><strong>3–6 Months</strong><br/><em>*With up to a year to complete your course</em></span>,
    uniHtml: "2–4 Years",
    certsHtml: "Varies by program (2 weeks - 6 months)"
  },
  {
    feature: "Planning Software",
    qcHtml: <span>AislePlanner Included:<br/>6 months free access</span>,
    uniHtml: "Not included",
    certsHtml: "Not included; student discounts may be available"
  },
  {
    feature: "Total Investment",
    qcHtml: <span><strong>High Value:</strong><br/>$789–$2,998 (Flexible Payment Plans Available)</span>,
    uniHtml: <span>High Cost:<br/>$20,000–$80,000+</span>,
    certsHtml: <span>Low Cost:<br/>$149–$1,500 (Varies by School, Limited Payment Plans)</span>,
    isInvestment: true
  }
];

export const Comparison = () => {
  const [mobileCompare, setMobileCompare] = useState<'university' | 'certs'>('university');

  return (
    <section id="courses" className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">Choosing Your Path</span>
          <h2>The Right Education for Your Goals</h2>
          <p>
            Your journey is unique. Whether you want to work in corporate event management or start your own business, the right training should fit your life, your timeline, and your ambitions.
          </p>
        </motion.div>

        {/* Mobile View */}
        <div className={styles.mobileView}>
          <div className={styles.switcher}>
            <button 
              className={cn(mobileCompare === 'university' && styles.active)}
              onClick={() => setMobileCompare('university')}
            >
              vs University/<br/>College Degree
            </button>
            <button 
              className={cn(mobileCompare === 'certs' && styles.active)}
              onClick={() => setMobileCompare('certs')}
            >
              vs Career Diplomas
            </button>
          </div>

          <div className={styles.cardList}>
            {comparisonData.map((row, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>{row.feature}</h3>
                </div>
                <div className={styles.cardBody}>
                  {/* QC Field */}
                  <h4 className={styles.brandLabel}>QC EVENT SCHOOL</h4>
                  <div className={cn(styles.qcContent, !row.isInvestment && styles.medium)}>
                    {row.qcHtml}
                  </div>
                  
                  <div className={styles.divider}></div>
                  
                  {/* Competitor Field */}
                  <h4 className={styles.competitorLabel}>
                    {mobileCompare === 'university' ? 'UNIVERSITY/COLLEGE DEGREE' : 'CAREER DIPLOMAS & CERTIFICATES'}
                  </h4>
                  <div className={styles.competitorContent}>
                    {mobileCompare === 'university' ? row.uniHtml : row.certsHtml}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className={styles.desktopView}>
          <table>
            <thead>
              <tr>
                <th className={styles.featureCol}>Feature</th>
                <th className={styles.qcCol}>
                  <div className={styles.brandTitle}>QC Event School</div>
                  <div className={styles.brandSubtitle}>IEWP™ Certification</div>
                </th>
                <th>
                  <div className={styles.compTitle}>University/College Degree</div>
                  <div className={styles.compSubtitle}>E.g. JWU, UCF</div>
                </th>
                <th>
                  <div className={styles.compTitle}>Career Diplomas & Certificates</div>
                  <div className={styles.compSubtitle}>E.g. Penn Foster, IAP</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => {
                const qcClasses = cn(styles.qcCell, row.isInvestment && styles.investment);
                const compClasses = cn(styles.compCell, row.isInvestment && styles.investment);
                
                return (
                  <tr key={idx}>
                    <td className={styles.featureName}>{row.feature}</td>
                    <td className={qcClasses}>{row.qcHtml}</td>
                    <td className={compClasses}>{row.uniHtml}</td>
                    <td className={compClasses}>{row.certsHtml}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <motion.div 
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h3>Have Questions? Speak with a Career Advisor.</h3>
            <p>Our dedicated team is here to provide the guidance you need to launch your firm. Your professional success is our priority—reach out today.</p>
          </div>
          <div className={styles.ctaButtons}>
            <button className={styles.btnContact}>
              Contact Us
            </button>
            <button className={styles.btnCourses}>
              Explore Courses <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
