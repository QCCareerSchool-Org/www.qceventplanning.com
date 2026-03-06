import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

interface Props {
  src: StaticImageData;
  name: string;
}

export const CertSlide: FC<Props> = ({ src, name }) => (
  <div className="p-2 mb-4">
    <Image src={src} alt={name} className="w-100 rounded-5 img-fluid" />
  </div>
);
