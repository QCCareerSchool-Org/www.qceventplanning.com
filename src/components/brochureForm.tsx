'use client';

import type { FC } from 'react';

type Props = {
  action: string;
  buttonText?: string;
};

export const BrochureForm: FC<Props> = ({ action, buttonText = 'Get the Catalog' }) => {
  return (
    <form action={action} method="post">
      <button className="btn btn-primary">{buttonText}</button>
    </form>
  );
};
