import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.fixedContainer}>
      {/* Top Welcome Bar */}
      <div className={styles.welcomeBar}>
        <p>
          ENDS SOON – GET 50% OFF ADDITIONAL COURSES!
        </p>
        <button className={styles.offerBtn}>
          CLAIM OFFER
        </button>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span className={styles.qc}>QC</span>
            <span className={styles.separator}>|</span>
            <span className={styles.school}>Event School</span>
          </div>
          
          <div className={styles.navGroup}>
            <div className={styles.links}>
              <a href="#">
                Courses <ChevronDown />
              </a>
              <a href="#">Free Catalog</a>
              <a href="#">Student Success</a>
              <a href="#">Tutors</a>
              <a href="#">
                About <ChevronDown />
              </a>
            </div>
            
            <div className={styles.actions}>
              <button className={styles.enrollBtn}>
                Enroll Now
              </button>
              <button className={styles.menuBtn}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
