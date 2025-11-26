'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { TelephoneForm } from '../telephoneForm';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  countryCode: string;
  leadId: string;
  telephoneListId: number;
  /** delay before showing the popup in ms */
  delay?: number;
}

export const TelephoneFormPopup: FC<Props> = ({ countryCode, leadId, telephoneListId, delay = 500 }) => {
  const [ show, toggle ] = useToggle();

  useEffect(() => {
    const id = setTimeout(() => {
      toggle();
    }, delay);

    return () => clearTimeout(id);
  }, [ delay, toggle ]);

  const handleHide = toggle;

  return (
    <Modal show={show} onHide={handleHide} style={{ zIndex: 2000 }}>
      <Modal.Header closeButton><strong>Want Special Offers & Course Updates?</strong></Modal.Header>
      <Modal.Body>
        <div className="p-2">
          <TelephoneForm countryCode={countryCode} leadId={leadId} telephoneListId={telephoneListId} />
        </div>
      </Modal.Body>
    </Modal>
  );
};
