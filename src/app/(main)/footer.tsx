import Link from 'next/link';
import type { FC } from 'react';

import BookReader from './book-reader.svg';
import styles from './footer.module.scss';
import Logo from '@/app/logo.svg';
import { TelephoneNumber } from '@/components/telephoneNumber';

export const Footer: FC = () => (
  <footer className={`${styles.footer} mt-auto`}>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-xl-5 col-xxl-6 mb-4 mb-lg-0">
            <Logo height="22" className="mb-4" />
            <h2 className="h6 mb-4">Get Started with a Free Course Catalog</h2>
            <Link href="/free-catalog" className="btn btn-outline-secondary">Get the Catalog <BookReader height="20" style={{ position: 'relative', top: -2 }} /></Link>
          </div>
          <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
            <div className="row">
              <div className={styles.column1}>
                <h3 className={`h6 ${styles.columnHeader}`}>Popular Courses</h3>
                <ul className={styles.linkList}>
                  <li><Link href="/courses/event-and-wedding-planning">Event &amp; Wedding Planning</Link></li>
                  <li><Link href="/courses/wedding-planning">Wedding Planning</Link></li>
                  <li><Link href="/courses/event-decor">Event Decor</Link></li>
                  <li><Link href="/courses/floral-design">Floral Design</Link></li>
                  <li><Link href="/courses/luxury-wedding-planning">Luxury Wedding Planning</Link></li>
                  <li><Link href="/courses/destination-wedding-planning">Destination Wedding Planning</Link></li>
                </ul>
              </div>
              <div className={styles.column2}>
                <h3 className={`h6 ${styles.columnHeader}`}>Resources</h3>
                <ul className={styles.linkList}>
                  <li>FAQ</li>
                  <li>About QC</li>
                  <li>Student Success</li>
                  <li>Tuition and Fees</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className={styles.column3}>
                <h3 className={`h6 ${styles.columnHeader}`}>Contact Us</h3>
                <ul className={styles.linkList}>
                  <li><a href="#">Chat</a></li>
                  <li><a href="mailto:info@qceventplanning.com">Email</a></li>
                  <li><TelephoneNumber /></li>
                  <li><a href="https://studentcenter.qccareerschool.com/students" target="_blank" rel="noreferrer">Student Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <small>
          <span className="me-3">&copy; {new Date().getFullYear()} QC Event Planning</span>
          <span className="me-3"><Link href="/terms">Privacy Policy</Link></span>
          <span className="me-3"><a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer">BBB Accredited A+</a></span>
          <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer">QC Career School</a>
        </small>
      </div>
    </section>
  </footer>
);
