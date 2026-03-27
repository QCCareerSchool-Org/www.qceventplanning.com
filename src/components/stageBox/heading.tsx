import type { FC, ReactNode } from 'react';

interface Props {
  text: string | ReactNode;
}

export const Heading: FC<Props> = ({ text }) => {
  if (typeof text === 'string') {
    return <h3 className="h5 mb-4">{text}</h3>;
  }
  return <>{text}</>;
};
