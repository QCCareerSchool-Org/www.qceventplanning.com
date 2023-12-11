import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
  src: StaticImageData;
  description: string;
};

export const GalleryModal: FC<Props> = props => (
  <Modal show={props.show} onHide={props.onHide} size="lg">
    <Modal.Header closeButton><span style={{ fontWeight: 500 }}>Student Success Gallery</span></Modal.Header>
    <Modal.Body>
      <Image src={props.src} alt={props.description} placeholder="blur" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
    </Modal.Body>
    <Modal.Footer>
      <div className="w-100">
        {props.description}
      </div>
    </Modal.Footer>
  </Modal>
);
