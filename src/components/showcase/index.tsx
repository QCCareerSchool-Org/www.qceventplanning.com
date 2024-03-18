import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { ImageCircle } from '../imageCircle';

type Props = {
  name: string;
  credentials: string;
  showcaseImageSrc: StaticImageData;
  iconImageSrc?: StaticImageData;
  description: string;
};

export const Showcase: FC<Props> = props => {
  return (
    <div className="row justify-content-center g-s">
      <div className="col-8 col-sm-6 col-lg-6">
        <Image src={props.showcaseImageSrc} alt={`${props.name}'s Showcase`} className="img-fluid" />
      </div>
      <div className="col-12 col-lg-6">
        <h2>Student Feature</h2>
        <p>We take immense pride in the success of all our graduates. See below for one inspiring story among many, highlighting the remarkable achievments of our talented alumni.</p>
        <div className="mb-3">
          <div className="d-flex">
            {props.iconImageSrc && <div className="me-3"><ImageCircle src={props.iconImageSrc} alt={props.name} /></div>}
            <div>
              <h3 className="h6 mb-1">{props.name}</h3>
              <small>{props.credentials}</small>
            </div>
          </div>
        </div>
        <p className="mb-0">{props.description}</p>
      </div>
    </div>
  );
};
