'use client';

import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';

import { FeaturedCourseCard } from '../featuredCourseCard';
import styles from './index.module.scss';

interface CourseItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  careerOutcome: string;
  href: string;
  imageSrc: StaticImageData;
}

interface Props {
  items: CourseItem[];
}

export const ChoosePathSection: FC<Props> = ({ items }) => {
  const [ selectedId, setSelectedId ] = useState(items[0].id);
  const selectedItem = items.find(item => item.id === selectedId) ?? items[0];

  const handleClick = (itemId: string) => {
    setSelectedId(itemId);
  };

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-12 text-center">
          <div className={styles.toggleGroup}>
            {items.map(item => <button key={item.id} onClick={() => handleClick(item.id)} type="button" className={`${styles.toggleButton} ${item.id === selectedId ? styles.toggleButtonActive : ''}`}>{item.label}</button>)}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <FeaturedCourseCard
            title={selectedItem.title}
            subtitle={selectedItem.subtitle}
            description={selectedItem.description}
            bestFor={selectedItem.bestFor}
            careerOutcome={selectedItem.careerOutcome}
            href={selectedItem.href}
            imageSrc={selectedItem.imageSrc}
          />
        </div>
      </div>
    </>
  );
};
