import type { FC } from 'react';
import type { IconType } from 'react-icons';

interface Props {
  icon: IconType;
}

export const IconBadge: FC<Props> = ({ icon: Icon }) => (
  <Icon aria-hidden="true" className="text-primary fs-3 mb-4" />
);
