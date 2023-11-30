import type { FC, PropsWithChildren } from 'react';

type Props = {
  heading: string;
};

export const Question: FC<PropsWithChildren<Props>> = ({ heading, children }) => (
  <>
    <h3 className="h6">{heading}</h3>
    {children}
    <hr />
  </>
);
