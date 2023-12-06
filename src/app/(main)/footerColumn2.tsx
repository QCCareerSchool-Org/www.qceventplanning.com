import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn2: FC = () => (
  <>
    <li><Link href="/frequently-asked-questions">FAQ</Link></li>
    <li><Link href="/student-success">Student Success</Link></li>
    <li><Link href="/tutors">Tutors</Link></li>
    <li><Link href="/about-qc">About QC</Link></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="https://studentcenter.qccareerschool.com/students" target="_blank" rel="noreferrer">Student Login</a></li>
  </>
);
