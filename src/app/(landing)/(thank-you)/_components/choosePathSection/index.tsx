'use client';

import type { StaticImageData } from 'next/image';
import type { FC } from 'react';
import { useState } from 'react';

import { FeaturedCourseCard } from '../featuredCourseCard';
import styles from './index.module.scss';

export interface CoursePath {
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
  paths: CoursePath[];
}

export const ChoosePathSection: FC<Props> = ({ paths }) => {
  const [ selectedId, setSelectedId ] = useState(paths[0].id);
  const selectedItem = paths.find(p => p.id === selectedId) ?? paths[0];

  const handleClick = (pathId: string) => {
    setSelectedId(pathId);
  };

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-12 text-center">
          <div className={styles.toggleGroup}>
            {paths.map(p => <button key={p.id} onClick={() => handleClick(p.id)} type="button" className={`${styles.toggleButton} ${p.id === selectedId ? styles.toggleButtonActive : ''}`}>{p.label}</button>)}
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
