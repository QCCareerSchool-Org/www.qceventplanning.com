'use client';

import type { FC } from 'react';
import { memo, useState } from 'react';

import { CarouselNav } from './CarouselNav';
import styles from './index.module.scss';
import { SlideContainer } from './SlideContainer';

type Props = {
  slides: FC[];
};

export const Carousel: FC<Props> = memo(props => {
  const numPages = props.slides.length;
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ heights, setHeights ] = useState<number[]>(new Array(numPages).fill(0));

  const handleNext = (): void => {
    setCurrentPage(c => (c < numPages - 1 ? c + 1 : 0));
  };

  const handlePrev = (): void => {
    setCurrentPage(c => (c > 0 ? c - 1 : numPages - 1));
  };

  const handleClick = (index: number): void => {
    setCurrentPage(index);
  };

  const handleHeightChange = (index: number, height: number): void => {
    setHeights(h => {
      const newHieghts = [ ...h ];
      newHieghts[index] = height;
      return newHieghts;
    });
  };

  const maxHeight = heights.reduce((prev, cur) => (cur > prev ? cur : prev), 0);

  return (
    <>
      <div className={styles.slideWrapper} style={{ height: maxHeight }}>
        {props.slides.map((Slide, i) => (
          <SlideContainer key={i} show={currentPage === i} onHeightChange={h => handleHeightChange(i, h)}>
            <Slide />
          </SlideContainer>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <CarouselNav
          numPages={numPages}
          currentPage={currentPage}
          onNext={handleNext}
          onPrev={handlePrev}
          onClick={handleClick}
        />
      </div>
    </>
  );
});

Carousel.displayName = 'Carousel';
