'use client';

import type { FC } from 'react';

import CherelleJosephShowcaseImage from './showcaseImages/cherelle-joseph.jpg';
import GiannaLucheseShowcaseImage from './showcaseImages/gianna-luchese.jpg';
import JennaPelcherShowcaseImage from './showcaseImages/jenna-pelcher.jpg';
import MadysonBellShowcaseImage from './showcaseImages/madyson-bell.jpg';
import TazmanBakerShowcaseImage from './showcaseImages/tazman-baker.jpg';
import { Carousel } from '@/components/carousel';
import { Showcase } from '@/components/showcase';
import { CherelleJoseph, GiannaLuchese, JennaPelcher, MadysonBell, TazmanBaker } from '@/components/testimonial/images';

export const CarouselSection: FC = () => (
  <section>
    <div className="container">
      <Carousel slides={slides} />
    </div>
  </section>
);

const CherelleJosephSlide: FC = () => (
  <Showcase
    name="Charelle Joseph"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={CherelleJosephShowcaseImage}
    iconImageSrc={CherelleJoseph}
    description="Cherelle launched her own wedding planning business in 2016 and hasn't looked back! From luxury destination weddings to bespoke ceremonies in her hometown of East London, she's mastered the in-demand industrial aesthetic her clients are looking for."
  />
);

const JennaPelcherSlide: FC = () => (
  <Showcase
    name="Jenna Pelcher"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={JennaPelcherShowcaseImage}
    iconImageSrc={JennaPelcher}
    description="Originally from New Jersey, Jenna went to school in New York for fashion design before making the exciting career change to event planning. In 2019, she found huge success opening up her own boutique decor business, Willa & Rose."
  />
);

const MadysonBellSlide: FC = () => (
  <Showcase
    name="Madyson Bell"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={MadysonBellShowcaseImage}
    iconImageSrc={MadysonBell}
    description="Mady, a Whitewater, Kansas native, ventured into event planning after her own wedding. With a knack for personalized touches, she founded Mady Bell Events in Wichita. Her romantic style and creativity shine, making dreams come true for clients. A QC Event School graduate, she's poised for success and continual growth."
  />
);

const TazmanBakerSlide: FC = () => (
  <Showcase
    name="Tazman Baker"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={TazmanBakerShowcaseImage}
    iconImageSrc={TazmanBaker}
    description="Tazman's event planning journey began with her own wedding, sparking a passion for creating memorable experiences. Enrolling in courses amidst impending motherhood, she later launched WhiteFoxx Events, armed with QC Event School certifications, to offer personalized experiences and leave a mark on her local event scene."
  />
);

const GiannaLucheseSlide: FC = () => (
  <Showcase
    name="Gianna Luchese"
    credentials="Event & Wedding Planning"
    showcaseImageSrc={GiannaLucheseShowcaseImage}
    iconImageSrc={GiannaLuchese}
    description="Gianna, owner of Events by Gianna, blends her Sonoma County roots with a passion for creativity. With a background in fashion and a love for the rococo era, she crafts opulent event designs. Her journey, fueled by education and experience, promises a future of expanded offerings and community connections."
  />
);

const slides = [ CherelleJosephSlide, JennaPelcherSlide, MadysonBellSlide, TazmanBakerSlide, GiannaLucheseSlide ];
