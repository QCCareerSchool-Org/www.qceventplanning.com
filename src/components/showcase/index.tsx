import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { type FC, useReducer } from 'react';

import { ImageCircle } from '../imageCircle';
import { Portfolio } from './portfolio';
import SeeMyWorkIcon from './see-my-work.svg';

type PortfolioImage = {
  src: StaticImageData;
  description?: string;
};

type Props = {
  name: string;
  credentials: string;
  showcaseImageSrc: StaticImageData;
  iconImageSrc?: StaticImageData;
  description: string;
  portfolioImages?: PortfolioImage[];
};

export const Showcase: FC<Props> = props => {
  const [ show, toggle ] = useReducer(x => !x, false);

  const handleHide = (): void => {
    toggle();
  };

  return (
    <>
      <div className="row justify-content-center g-4 g-lg-s">
        <div className="col-8 col-sm-6 col-lg-6 order-2 order-lg-1">
          <Image onClick={handleHide} src={props.showcaseImageSrc} alt={`${props.name}'s Showcase`} className="img-fluid" style={{ cursor: 'pointer' }} />
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <div className="text-center text-lg-start mb-5 mb-lg-3">
            <h2>Student Feature</h2>
            <p className="mb-0">We take immense pride in the success of all our graduates. See below for one inspiring story among many, highlighting the remarkable achievments of our talented alumni.</p>
          </div>
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
          {props.portfolioImages && <div onClick={handleHide} className="d-flex align-items-center mt-3" style={{ cursor: 'pointer' }}><small style={{ color: 'black', fontWeight: 500 }}><div className="d-inline-block me-2"><SeeMyWorkIcon alt="" /></div>See My Work</small></div>}
        </div>
      </div>
      {props.portfolioImages && <Portfolio name={props.name} show={show} onHide={handleHide} images={props.portfolioImages} />}
    </>
  );
};
