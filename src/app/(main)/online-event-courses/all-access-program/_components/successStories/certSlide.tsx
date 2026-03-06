import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

interface Props {
  src: StaticImageData;
  name: string;
}

export const CertSlide: FC<Props> = ({ src, name }) => <Image src={src} alt={name} className="rounded-5 img-fluid" />;
