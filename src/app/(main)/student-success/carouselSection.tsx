'use client';

import type { FC } from 'react';

import { Carousel } from '@/components/carousel';
import { CherelleJosephShowcase } from '@/components/showcase/cherelleJoseph';
import { GiannaLucheseShowcase } from '@/components/showcase/gianna-luchese';
import { JennaPelcherShowcase } from '@/components/showcase/jenna-pelcher';
import { MadysonBellShowcase } from '@/components/showcase/madyson-bell';
import { TazmanBakerShowcase } from '@/components/showcase/tazman-baker';

const slides = [ CherelleJosephShowcase, JennaPelcherShowcase, MadysonBellShowcase, TazmanBakerShowcase, GiannaLucheseShowcase ];

type Props = {
  className?: string;
};

export const CarouselSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <Carousel slides={slides} />
    </div>
  </section>
);
