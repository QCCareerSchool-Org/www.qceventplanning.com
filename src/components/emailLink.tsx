'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

export const EmailLink: FC<Props> = ({ className }) => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    setEmailAddress('info@qceventplanning.com');
  }, []);

  return <a className={className} href={`mailto:${emailAddress}`}>{emailAddress}</a>;
};
