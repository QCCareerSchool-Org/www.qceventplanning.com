import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  aspectRatio: number;
  onClick: () => void;
};

export const GalleryImage: FC<Props> = props => (
  <div onClick={props.onClick} className={props.className} style={{ position: 'relative', aspectRatio: props.aspectRatio, cursor: 'pointer' }}>
    <Image src={props.src} fill placeholder="blur" className="" alt={props.alt} style={{ objectFit: 'cover' }} />
  </div>
);
