'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import { Logo } from '@/components/logo';
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
    <Navbar key={key} expand="lg" collapseOnSelect={true} fixed="top" className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} bg-white`}>
      <div className="container">
        <Link className="navbar-brand" href="/" aria-label="Home page">
          <div id="navLogo" className="d-none d-sm-block">
            <Logo height={20} />
          </div>
          <div className="d-sm-none">
            <Logo height={16} />
          </div>
        </Link>
        <div className="d-flex">
          <div className="d-none d-sm-block d-lg-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-navy">Enroll Now</Link></div>
          <div className="d-sm-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-sm btn-navy">Enroll Now</Link></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Toggle />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Courses" id="courses-nav-dropdown">
              <li style={{ paddingLeft: '1rem', fontWeight: 'bold', margin: '0.5rem 0 0.5rem 0' }}>Foundation Courses</li>
              <Link href="/online-event-courses/event-and-wedding-planning" className="dropdown-item" onClick={handleClick}>Event &amp; Wedding Planning</Link>
              <Link href="/online-event-courses/corporate-event-planning" className="dropdown-item" onClick={handleClick}>Corporate Event Planning</Link>
              <Link href="/online-event-courses/event-planning" className="dropdown-item" onClick={handleClick}>Event Planning</Link>
              <Link href="/online-event-courses/event-decor" className="dropdown-item" onClick={handleClick}>Event Decor</Link>
              <Link href="/online-event-courses/floral-design" className="dropdown-item" onClick={handleClick}>Floral Design</Link>
              <Link href="/online-event-courses/wedding-planning" className="dropdown-item" onClick={handleClick}>Wedding Planning</Link>
              <li><hr className="dropdown-divider" /></li>
              <li style={{ paddingLeft: '1rem', fontWeight: 'bold', margin: '1rem 0 0.5rem 0' }}>Specialty Courses</li>
              <Link href="/online-event-courses/luxury-wedding-and-event-planning" className="dropdown-item" onClick={handleClick}>Luxury Wedding &amp; Event Planning</Link>
              <Link href="/online-event-courses/destination-wedding-planning" className="dropdown-item" onClick={handleClick}>Destination Wedding Planning</Link>
              <Link href="/online-event-courses/promotional-event-planning" className="dropdown-item" onClick={handleClick}>Promotional Event Planning</Link>
              <Link href="/online-event-courses/festivals-and-live-events" className="dropdown-item" onClick={handleClick}>Festivals and Live Events</Link>
              <Link href="/online-event-courses/accelerate-your-business" className="dropdown-item" onClick={handleClick}>Accelerate Your Business</Link>
              <li><hr className="dropdown-divider" /></li>
              <Link href="/online-event-courses" className="dropdown-item" onClick={handleClick}>View All Courses</Link>
              <Link href="/how-it-works" className="dropdown-item" onClick={handleClick}>Learning Event Planning Online</Link>
            </NavDropdown>
            <Link href="/free-catalog" className="nav-link" onClick={handleClick}>Free Catalog</Link>
            <Link href="/student-success" className="nav-link" onClick={handleClick}>Student Success</Link>
            <Link href="/tutors" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Tutors</Link>
            <NavDropdown title="About" id="about-nav-dropdown">
              <Link href="/about-qc" className="dropdown-item" onClick={handleClick}>About the School</Link>
              <Link href="/about-qc/meet-the-team" className="dropdown-item" onClick={handleClick}>Meet the Team</Link>
              <Link href="/contact-us" className="dropdown-item" onClick={handleClick}>Contact Us</Link>
            </NavDropdown>
            <div className="d-none d-lg-block ms-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-navy">Enroll Now</Link></div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
