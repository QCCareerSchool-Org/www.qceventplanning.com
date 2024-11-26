'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

export const Popup: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton><strong className="text-black">Black Friday Special</strong></Modal.Header>
    <Modal.Body>
      <p>Enroll in any foundation course and get two specialty courses FREE! Specialize your training and become a certified expert with our Black Friday special&mdash;don't miss out!</p>
      <div className="text-center"><a href="https://enroll.qceventplanning.com"><button className="btn btn-primary shadow-sm">Enroll Now</button></a></div>
      <hr />
      <h6>Learn From Expert Instructors</h6>
      <p>We've hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
      <h6>Industry-Recognized Certifications</h6>
      <p>Graduate with three professional event planning certifications and open up a world of career & business opportunities.</p>
      <h6>Business Training Included</h6>
      <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner.</p>
    </Modal.Body>
  </Modal>
);
