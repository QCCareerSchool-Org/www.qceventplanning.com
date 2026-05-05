'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { startTransition, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import { Logo } from '@/components/logo';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';

/** Pages that need a different URL for the enroll button */
const enrollUrls = [
  { pattern: /^\/online-event-courses\/all-access-program/u, url: 'https://enroll.qceventplanning.com/all-access-program' },
] as const;

export const MainNav: FC = () => {
  const path = usePathname();
  const scrollPosition = useScrollPositionContext() ?? 0;
  const [ key, setKey ] = useState(0);

  const url = enrollUrls.find(x => x.pattern.test(path))?.url ?? 'https://enroll.qceventplanning.com';

  const handleClick = (): void => {
    startTransition(() => { setKey(k => k + 1); });
  };

  return (
    <div className="bg-white">
      <Navbar key={key} expand="lg" collapseOnSelect={true} className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} bg-white`}>
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
            <div className="d-none d-sm-block d-lg-none me-3"><Link href={url} className="btn btn-navy">Enroll Now</Link></div>
            <div className="d-sm-none me-3"><Link href={url} className="btn btn-sm btn-navy">Enroll Now</Link></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <Toggle />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="courses-nav-dropdown">
                <Link href="/online-event-courses/all-access-program" className="dropdown-item fw-bold" style={{ marginLeft: '-0.375rem' }} onClick={handleClick}><span className="badge bg-primary">New</span>&nbsp; All-Access Program</Link>
                <hr className="dropdown-divider" />
                <Link href="/online-event-courses" className="dropdown-item" onClick={handleClick}>View All Courses</Link>
                <hr className="dropdown-divider" />
                <div style={{ paddingLeft: '1rem', fontWeight: 'bold', margin: '0.5rem 0 0.5rem 0' }}>Foundation Courses</div>
                <Link href="/online-event-courses/event-and-wedding-planning" className="dropdown-item" onClick={handleClick}>Event &amp; Wedding Planning</Link>
                <Link href="/online-event-courses/corporate-event-planning" className="dropdown-item" onClick={handleClick}>Corporate Event Planning</Link>
                <Link href="/online-event-courses/event-planning" className="dropdown-item" onClick={handleClick}>Event Planning</Link>
                <Link href="/online-event-courses/floral-design" className="dropdown-item" onClick={handleClick}>Floral Design</Link>
                <Link href="/online-event-courses/wedding-planning" className="dropdown-item" onClick={handleClick}>Wedding Planning</Link>
                <Link href="/online-event-courses/event-decor" className="dropdown-item" onClick={handleClick}>Event Decor</Link>
                <hr className="dropdown-divider" />
                <div style={{ paddingLeft: '1rem', fontWeight: 'bold', margin: '1rem 0 0.5rem 0' }}>Specialty Courses</div>
                <Link href="/online-event-courses/luxury-wedding-and-event-planning" className="dropdown-item" onClick={handleClick}>Luxury Wedding &amp; Event Planning</Link>
                <Link href="/online-event-courses/destination-wedding-planning" className="dropdown-item" onClick={handleClick}>Destination Wedding Planning</Link>
                <Link href="/online-event-courses/promotional-event-planning" className="dropdown-item" onClick={handleClick}>Promotional Event Planning</Link>
                <Link href="/online-event-courses/festivals-and-live-events" className="dropdown-item" onClick={handleClick}>Festivals and Live Events</Link>
                <Link href="/online-event-courses/accelerate-your-business" className="dropdown-item" onClick={handleClick}>Accelerate Your Business</Link>
              </NavDropdown>
              <Link href="/free-catalog" className="nav-link" onClick={handleClick}>Free Catalog</Link>
              <Link href="/student-success" className="nav-link" onClick={handleClick}>Student Success</Link>
              <Link href="/tutors" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Tutors</Link>
              <NavDropdown title="About" id="about-nav-dropdown">
                <Link href="/about-qc" className="dropdown-item" onClick={handleClick}>About the School</Link>
                <Link href="/how-it-works" className="dropdown-item" onClick={handleClick}>How to Become an Event Planner</Link>
                <Link href="/about-qc/meet-the-team" className="dropdown-item" onClick={handleClick}>Meet the Team</Link>
                <Link href="/contact-us" className="dropdown-item" onClick={handleClick}>Contact Us</Link>
              </NavDropdown>
              <div className="d-none d-lg-block ms-3"><Link href={url} className="btn btn-navy">Enroll Now</Link></div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};
