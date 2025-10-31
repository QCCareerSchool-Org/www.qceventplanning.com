'use client';

import type { FC, PropsWithChildren } from 'react';
import { Accordion } from './accordion';

type Props = {
  heading: string;
  className?: string;
};

export const AccordionFAQ: FC<PropsWithChildren<Props>> = ({ heading, children, className }) => {
  const schemaHeading = `<span itemProp="name">${heading}</span>`;
  return (
    <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
      <Accordion title={schemaHeading} className={className}>
        <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <div itemProp="text">
            {children}
          </div>
        </div>
      </Accordion>
    </div>
  );
};
