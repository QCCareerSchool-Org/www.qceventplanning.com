import type { ComponentPropsWithoutRef, CSSProperties, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {
  backgroundColor: CSSProperties['backgroundColor'];
  style?: CSSProperties;
}

export const Overlay: FC<Props> = ({ backgroundColor, className, style, ...props }) => (
  <div {...props} className={className} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor, ...style }} />
);
