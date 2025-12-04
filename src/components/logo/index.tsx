import type { FC } from 'react';

import LogoImage from './logo.svg';

interface Props {
  height: number;
}

export const Logo: FC<Props> = ({ height }) => <LogoImage title="QC Event School" style={{ height, width: 'auto' }} />;
