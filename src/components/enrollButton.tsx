import type { FC } from 'react';

interface Props {
  courseCodes: string[];
}

export const EnrollButton: FC<Props> = ({ courseCodes }) => {
  let href = 'https://enroll.qceventplanning.com?';
  for (const c of courseCodes) {
    href += `c=${encodeURIComponent(c)}`;
  }
  return (
    <a href={href} className="btn btn-lg btn-primary">Enroll Now</a>
  );
};
