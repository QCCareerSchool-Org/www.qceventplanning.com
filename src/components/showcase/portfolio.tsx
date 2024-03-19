import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { type FC, useState } from 'react';
import { Modal } from 'react-bootstrap';

import NavArrowIcon from './nav-arrow.svg';

type Props = {
  name: string;
  show: boolean;
  onHide: () => void;
  images: Array<{
    src: StaticImageData;
    description?: string;
  }>;
};

export const Portfolio: FC<Props> = props => {
  const [ index, setIndex ] = useState(0);

  const handleNextClick = (): void => {
    setIndex(i => (i === props.images.length - 1 ? 0 : i + 1));
  };

  const handlePrevClick = (): void => {
    setIndex(i => (i === 0 ? props.images.length - 1 : i - 1));
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>{props.name}'s Work</Modal.Header>
      <Modal.Body>
        <Image src={props.images[index].src} placeholder="blur" alt={`Image ${index + 1} of ${props.images.length}`} className="img-fluid w-100" />
      </Modal.Body>
      {(props.images.length > 1 || typeof props.images[index].description !== 'undefined') && (
        <Modal.Footer>
          <div className="d-flex align-items-center w-100">
            {props.images.length > 1 && (
              <div className="flex-shrink-1">
                <NavArrowIcon onClick={handlePrevClick} alt="Prev" className="me-3" />
              </div>
            )}
            <div className="flex-grow-1">
              {typeof props.images[index].description !== 'undefined' && <>{props.images[index].description}</>}
            </div>
            {props.images.length > 1 && (
              <div className="flex-shrink-1">
                <NavArrowIcon onClick={handleNextClick} alt="Next" className="ms-3" style={{ transform: 'scaleX(-1)' }} />
              </div>
            )}
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};
