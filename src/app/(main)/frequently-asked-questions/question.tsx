import type { FC, PropsWithChildren } from 'react';

interface Props {
  heading: string;
}

export const Question: FC<PropsWithChildren<Props>> = ({ heading, children }) => (
  <>
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <h3 className="h6" itemProp="name">{heading}</h3>
      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div itemProp="text">
          {children}
        </div>
      </div>
    </div>
    <hr />
  </>
);
