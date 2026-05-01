'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import Image from 'next/image';
import type { FC } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import type { ArrowProps, DotProps, ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { eventTestimonials } from './eventTestimonials';
import styles from './index.module.scss';
import testimonialStyles from '../testimonial/index.module.css';
import { Star } from '../testimonial/star';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

interface Props {
  className?: string;
}

const responsive: ResponsiveType = {
  wide: {
    breakpoint: { max: 9999, min: 1200 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1199, min: 992 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 56,
    slidesToSlide: 1,
  },
};

const autoPlaySpeed = 8000;
const imageSize = 64;

export const EventTestimonialCarousel: FC<Props> = ({ className }) => {
  const [ intersected, ref ] = useIntersectionObserver();
  const { lt } = useScreenSizeContext();
  const mobile = lt('lg');

  return (
    <section className={className}>
      <div className={styles.shell} ref={ref}>
        <Carousel
          ssr
          responsive={responsive}
          infinite
          arrows
          centerMode={!mobile}
          partialVisible={mobile}
          showDots
          renderDotsOutside
          customLeftArrow={<CarouselArrow direction="left" />}
          customRightArrow={<CarouselArrow direction="right" />}
          customDot={<CarouselDot />}
          containerClass={styles.carousel}
          sliderClass={styles.track}
          itemClass={styles.item}
          dotListClass={styles.dots}
          autoPlay={intersected}
          autoPlaySpeed={autoPlaySpeed}
          pauseOnHover
        >
          {eventTestimonials.map(testimonial => (
            <div className={`${styles.card} mx-3 mb-md-5`} key={`${testimonial.studentName}-${testimonial.courseName}`}>
              <blockquote className={testimonialStyles.testimonial} itemScope itemType="https://schema.org/Review">
                <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Course">
                  <link itemProp="url" href={testimonial.courseUrl} />
                  <meta itemProp="name" content={testimonial.courseName} />
                  <meta itemProp="description" content={testimonial.courseDescription} />
                  <span itemProp="provider" itemScope itemType="https://schema.org/EducationalOrganization">
                    <meta itemProp="name" content="QC Event School" />
                  </span>
                </span>
                <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                </span>
                <div className={testimonialStyles.stars}>
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} filled={index < testimonial.rating} />)}
                </div>
                <div itemProp="reviewBody">
                  <p className={`${testimonialStyles.quotation} ${testimonialStyles.small}`}>&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <footer className={testimonialStyles.footer} itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className={testimonialStyles.imageWrapper}>
                    <div style={{ position: 'relative', width: imageSize, height: imageSize, borderRadius: imageSize / 2 }}>
                      <Image
                        alt={testimonial.studentName}
                        src={testimonial.imageUrl}
                        fill
                        sizes={`${imageSize * 2}px`}
                        style={{ objectFit: 'cover', objectPosition: '50% 50%', borderRadius: imageSize / 2 }}
                      />
                    </div>
                  </div>
                  <cite>
                    <span className={testimonialStyles.attribution} itemProp="name">{testimonial.studentName}</span><br />
                    <span className={testimonialStyles.title}>{testimonial.courseName}</span>
                  </cite>
                </footer>
              </blockquote>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

interface CarouselArrowProps extends ArrowProps {
  direction: 'left' | 'right';
}

const CarouselArrow: FC<CarouselArrowProps> = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? BiChevronLeft : BiChevronRight;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`${styles.arrow} ${direction === 'left' ? styles.leftArrow : styles.rightArrow}`}
      aria-label={direction === 'left' ? 'Previous testimonial' : 'Next testimonial'}
      onClick={handleClick}
    >
      <Icon aria-hidden="true" />
    </button>
  );
};

const CarouselDot: FC<DotProps> = ({ active, index, onClick }) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`${styles.dot} ${active ? styles.activeDot : ''}`}
      aria-label={`Go to testimonial slide ${(index ?? 0) + 1}`}
      aria-pressed={active}
      onClick={handleClick}
    />
  );
};
