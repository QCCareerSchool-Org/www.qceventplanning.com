import Image from 'next/image';
import type { FC } from 'react';

import { ClickWrapper } from './clickWrapper';
import DesktopEnds from './desktop-ends.jpg';
import Desktop from './desktop.jpg';
import MobileEnds from './mobile-ends.jpg';
import Mobile from './mobile.jpg';

type Props = {
  countryCode: string;
  date: number;
};

const startDate = Date.UTC(2024, 10, 26);
const lastChanceDate = Date.UTC(2024, 10, 29, 8); // 2024-11-29T03:00 (08:00 UTC)
const endDate = Date.UTC(2024, 10, 30, 8); // 2024-11-30T03:00 (08:00 UTC)

export const PromoSection: FC<Props> = ({ date }) => {
  if (date < startDate || date >= endDate) {
    return;
  }

  const [ desktopSrc, mobileSrc ] = date < lastChanceDate
    ? [ Desktop, Mobile ]
    : [ DesktopEnds, MobileEnds ];

  return (
    <section className="bg-black color-white p-0">
      <ClickWrapper>
        <Image src={desktopSrc} className="d-none d-sm-block img-fluid w-100" alt="" />
        <Image src={mobileSrc} className="d-block d-sm-none img-fluid w-100" alt="" />
      </ClickWrapper>
    </section>
  );
};
