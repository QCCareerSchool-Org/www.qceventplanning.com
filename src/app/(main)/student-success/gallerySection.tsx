'use client';

import type { StaticImageData } from 'next/image';
import { type FC, useState } from 'react';

import { GalleryImage } from './GalleryImage';
import { GalleryModal } from './galleryModal';
import AmyPetit01Image from './images/amy-petit-01.jpg';
import CameshaIsaac01Image from './images/camesha-isaac-01.jpg';
import CameshaIsaac02Image from './images/camesha-isaac-02.jpg';
import GianaLuchese01Image from './images/gianna-luchese-01.jpg';
import JeannetteSpencer01Image from './images/jeanette-spencer-01.jpg';
import JordanMerlino01Image from './images/jordan-merlino-01.jpg';
import LaurenSpignola01Image from './images/lauren-spignola-01.jpg';

type ImageData = {
  src: StaticImageData;
  description: string;
};

const imageData: ImageData[] = [
  { src: AmyPetit01Image, description: 'A two-tiered wedding cake with white frosting and purple flowers.' },
  { src: CameshaIsaac01Image, description: 'A luxurious wedding dinner setup with tall, tropical centerpieces and golden chairs.' },
  { src: JeannetteSpencer01Image, description: 'The bride is having her makeup done before the wedding ceremony.' },
  { src: CameshaIsaac02Image, description: 'A place setting at a wedding reception, featuring white linens and green tropical leaves.' },
  { src: GianaLuchese01Image, description: 'A table at a wedding reception adorned with a dense floral arrangement in shades of pink and cream.' },
  { src: LaurenSpignola01Image, description: 'An elegant wedding invitation on a teal background with gold cursive writing.' },
  { src: JordanMerlino01Image, description: 'A bride and groom sharing a dance, smiling at each other, dressed in traditional Filipino wedding attire.' },
];

export const GallerySection: FC = () => {
  const [ modal, setModal ] = useState(false);
  const [ imageIndex, setImageIndex ] = useState<number>();

  const handleModalHide = (): void => {
    setModal(false);
  };

  const handleImage1Click = (): void => showModal(0);
  const handleImage2Click = (): void => showModal(1);
  const handleImage3Click = (): void => showModal(2);
  const handleImage4Click = (): void => showModal(3);
  const handleImage5Click = (): void => showModal(4);
  const handleImage6Click = (): void => showModal(5);
  const handleImage7Click = (): void => showModal(6);

  const showModal = (index: number): void => {
    setImageIndex(index);
    setModal(true);
  };

  return (
    <section>
      <div className="container text-center">
        <h2 className="mb-3">Inspired Events</h2>
        <p className="lead mb-5">A Glimpse into Student Achievements</p>
        <div className="row g-2 g-sm-3 g-md-4">
          <div className="col-4">
            <GalleryImage onClick={handleImage1Click} src={AmyPetit01Image} alt="Amy Petit" aspectRatio={1} className="mb-2 mb-sm-3 mb-md-4" />
            <GalleryImage onClick={handleImage2Click} src={CameshaIsaac01Image} alt="Camesha Isaac" aspectRatio={1} />
          </div>
          <div className="col-4">
            <GalleryImage onClick={handleImage3Click} src={JeannetteSpencer01Image} alt="Jeannette Spencer" aspectRatio={1.777} className="mb-2 mb-sm-3 mb-md-4" />
            <GalleryImage onClick={handleImage4Click} src={CameshaIsaac02Image} alt="Camesha Isaac" aspectRatio={1.777} className="mb-2 mb-sm-3 mb-md-4" />
            <GalleryImage onClick={handleImage5Click} src={GianaLuchese01Image} alt="Giana Luchese" aspectRatio={1} />
          </div>
          <div className="col-4">
            <GalleryImage onClick={handleImage6Click} src={LaurenSpignola01Image} alt="Lauren Spignola" aspectRatio={1} className="mb-2 mb-sm-3 mb-md-4" />
            <GalleryImage onClick={handleImage7Click} src={JordanMerlino01Image} alt="Jordan Merlino" aspectRatio={1} />
          </div>
        </div>
      </div>
      {typeof imageIndex !== 'undefined' && <GalleryModal src={imageData[imageIndex].src} description={imageData[imageIndex].description} show={modal} onHide={handleModalHide} />}
    </section>
  );
};
