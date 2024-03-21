'use client';

import type { FC } from 'react';
import { memo, useCallback, useState } from 'react';

import { CarouselNav } from './CarouselNav';
import styles from './index.module.scss';
import { SlideContainer } from './SlideContainer';

type Props = {
  slides: FC[];
};

export const Carousel: FC<Props> = memo(({ slides }) => {
  const numPages = slides.length;
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ heights, setHeights ] = useState<number[]>(new Array(numPages).fill(0));

  const handleNext = useCallback((): void => {
    setCurrentPage(c => (c < numPages - 1 ? c + 1 : 0));
  }, [ numPages, setCurrentPage ]);

  const handlePrev = useCallback((): void => {
    setCurrentPage(c => (c > 0 ? c - 1 : numPages - 1));
  }, [ numPages, setCurrentPage ]);

  const handleClick = useCallback((index: number): void => {
    setCurrentPage(index);
  }, [ setCurrentPage ]);

  const handleHeightChange = useCallback((index: number, height: number): void => {
    setHeights(h => {
      const newHieghts = [ ...h ];
      newHieghts[index] = height;
      return newHieghts;
    });
  }, []);

  const maxHeight = heights.reduce((prev, cur) => (cur > prev ? cur : prev), 0);

  return (
    <>
      <div className={styles.slideWrapper} style={{ height: maxHeight }}>
        {slides.map((Slide, i) => (
          <SlideContainer key={i} show={currentPage === i} index={i} onHeightChange={handleHeightChange}>
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
