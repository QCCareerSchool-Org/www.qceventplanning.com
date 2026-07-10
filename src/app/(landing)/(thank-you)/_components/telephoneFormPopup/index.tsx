'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import { TelephoneForm } from '../telephoneForm';
import type { ESP } from '@/domain/esp';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  countryCode: string;
  leadId: string;
  telephoneListId: number;
  /** delay before showing the popup in ms */
  delay?: number;
  esp?: ESP;
}

export const TelephoneFormPopup: FC<Props> = ({ countryCode, leadId, telephoneListId, delay = 500, esp }) => {
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
      <Modal.Header closeButton><strong>Your Future in Event Planning Starts Here</strong></Modal.Header>
      <Modal.Body>
        <div className="p-2">
          <h2 className="h6 mb-3 fw-bold">Want Special Offers by Text?</h2>
          <TelephoneForm countryCode={countryCode} leadId={leadId} telephoneListId={telephoneListId} esp={esp} />
        </div>
      </Modal.Body>
    </Modal>
  );
};
