import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/frequently-asked-questions">FAQ</Link></li>
    <li><Link href="/about-qc">About QC</Link></li>
    <li><Link href="/tutors">Tutors</Link></li>
    <li><Link href="/student-success">Student Success</Link></li>
    <li><Link href="/tuition">Tuition and Fees</Link></li>
    <li><Link href="/blog">Blog</Link></li>
  </>
);
