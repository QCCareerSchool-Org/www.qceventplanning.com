'use client';

import type { FC, PropsWithChildren } from 'react';
import { Accordion } from './accordion';

type Props = {
  heading: string;
};

export const AccordionFAQ: FC<PropsWithChildren<Props>> = ({ heading, children }) => {
  const schemaHeading = `<span itemProp="name">${heading}</span>`;
  return (
    <div itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
      <Accordion title={schemaHeading}>
        {/* <div itemProp="name">
        {heading}
      </div> */}
        <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
          <div itemProp="text">
            {children}
          </div>
        </div>
      </Accordion>
    </div>
  );
};
