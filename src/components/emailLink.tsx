import type { CSSProperties, FC } from 'react';

import addresses from '@/lib/emailAddress';

interface Props {
  className?: string;
  style?: CSSProperties;
  text?: string;
}

export const EmailLink: FC<Props> = ({ className, style, text }) => {
  const emailAddress = addresses.info;

  return <a className={className} style={style} href={`mailto:${emailAddress}`}>{text ?? emailAddress}</a>;
};
