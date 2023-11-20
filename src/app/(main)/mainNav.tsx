'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import Logo from '@/app/logo.svg';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const MainNav: FC = () => {
  const scrollPosition = useScrollPosition();
  const [ key, setKey ] = useState(0);

  const handleClick = (): void => {
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 0);
  };

  return (
    <Navbar expand="lg" collapseOnSelect={true} fixed="top" className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} bg-white`}>
      <div className="container">
        <Link className="navbar-brand" href="/"><Logo alt="QC Event School" style={{ height: 20, width: 'auto' }} /></Link>
        <div className="d-flex">
          <div className="d-none d-sm-block d-lg-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-primary">Enroll Now</Link></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Toggle />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav" key={key}>
          <Nav className="ms-auto">
            <NavDropdown title="Courses" id="courses-nav-dropdown">
              <Link href="/courses/event-and-wedding-planning" className="dropdown-item" onClick={handleClick}>Event &amp; Wedding Planning</Link>
              <Link href="/courses/wedding-planning" className="dropdown-item">Wedding Planning</Link>
              <Link href="/courses/corporate-event-planning" className="dropdown-item">Corporate Event Planning</Link>
            </NavDropdown>
            <Link href="/free-catalog" className="nav-link">Free Catalog</Link>
            <Link href="/student-success" className="nav-link">Student Success</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/about" className="nav-link">About<span className="d-lg-none d-xl-inline"> Us</span></Link>
            <div className="d-none d-lg-block ms-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-primary">Enroll Now</Link></div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
