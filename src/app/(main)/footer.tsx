import Link from 'next/link';
import type { FC } from 'react';

import BookReader from './book-reader.svg';
import styles from './footer.module.scss';
import { FooterColumn1 } from './footerColumn1';
import { FooterColumn2 } from './footerColumn2';
import { FooterColumn3 } from './footerColumn3';
import { Logo } from '@/components/logo';

export const Footer: FC = () => (
  <footer className={`${styles.footer} mt-auto`}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 col-xl-5 col-xxl-6 mb-4 mb-lg-0">
          <div className="mb-4"><Logo height={22} /></div>
          <h2 className="h6 mb-4">Get Started with a Free Course Catalog</h2>
          <Link href="/free-catalog" className="btn btn-outline-secondary">Get the Catalog <BookReader height="20" style={{ position: 'relative', top: -2 }} /></Link>
        </div>
        <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
          <div className="row">
            <div className={styles.column1}>
              <h3 className={`h6 ${styles.columnHeader}`}>Popular Courses</h3>
              <ul className={styles.linkList}>
                <FooterColumn1 />
              </ul>
            </div>
            <div className={styles.column2}>
              <h3 className={`h6 ${styles.columnHeader}`}>Resources</h3>
              <ul className={styles.linkList}>
                <FooterColumn2 />
              </ul>
            </div>
            <div className={styles.column3}>
              <h3 className={`h6 ${styles.columnHeader}`}>Contact Us</h3>
              <ul className={styles.linkList}>
                <FooterColumn3 />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="small d-flex flex-column flex-md-row">
        <div className="me-md-3 mb-1 mb-md-0">&copy; {new Date().getFullYear()} QC Event Planning</div>
        <div className="d-flex flex-column flex-sm-row">
          <div className="me-sm-3"><Link href="/terms">Privacy Policy</Link></div>
          <div className="me-sm-3"><a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer">BBB Accredited A+</a></div>
          <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer">QC Career School</a>
        </div>
      </div>
    </div>
  </footer>
);
