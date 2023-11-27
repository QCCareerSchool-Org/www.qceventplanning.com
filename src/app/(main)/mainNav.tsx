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
    <Navbar key={key} expand="lg" collapseOnSelect={true} fixed="top" className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} bg-white`}>
      <div className="container">
        <Link className="navbar-brand" href="/" aria-label="Go back to the home page"><Logo alt="QC Event School" style={{ height: 20, width: 'auto' }} /></Link>
        <div className="d-flex">
          <div className="d-none d-sm-block d-lg-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-primary">Enroll Now</Link></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Toggle />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Courses" id="courses-nav-dropdown">
              <Link href="/courses/event-and-wedding-planning" className="dropdown-item" onClick={handleClick}>Event &amp; Wedding Planning</Link>
              <Link href="/courses/wedding-planning" className="dropdown-item" onClick={handleClick}>Wedding Planning</Link>
              <Link href="/courses/corporate-event-planning" className="dropdown-item" onClick={handleClick}>Corporate Event Planning</Link>
              <Link href="/courses/event-decor" className="dropdown-item" onClick={handleClick}>Event Decor</Link>
              <Link href="/courses/floral-design" className="dropdown-item" onClick={handleClick}>Floral Design</Link>
              <Link href="/courses/luxury-event-and-wedding-planning" className="dropdown-item" onClick={handleClick}>Luxury Event &amp; Wedding Planning</Link>
              <Link href="/courses/destination-wedding-planning" className="dropdown-item" onClick={handleClick}>Destination Wedding Planning</Link>
              <Link href="/courses/accelerate-your-business" className="dropdown-item" onClick={handleClick}>Accelerate Your Business</Link>
            </NavDropdown>
            <Link href="/free-catalog" className="nav-link" onClick={handleClick}>Free Catalog</Link>
            <Link href="/student-success" className="nav-link" onClick={handleClick}>Student Success</Link>
            <Link href="/contact-us" className="nav-link" onClick={handleClick}>Contact<span className="d-lg-none d-xl-inline"> Us</span></Link>
            <div className="d-none d-lg-block ms-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-primary">Enroll Now</Link></div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
