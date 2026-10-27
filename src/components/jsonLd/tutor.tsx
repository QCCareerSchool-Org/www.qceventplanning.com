import type { FC } from 'react';
import type { Person, WithContext } from 'schema-dts';

import { withSuspense } from '../withSuspense';
import type { Tutor } from '@/domain/tutor';
import { qcEventSchoolEducationalOrganization } from '@/qcEventSchoolEducationalOrganization';

interface Props {
  tutor: Tutor;
  id?: string;
}

const TutorJsonLdBase: FC<Props> = ({ tutor, id = '#tutor' }) => {
  const jsonLd = getTutor(tutor, id);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const TutorJsonLd = withSuspense(TutorJsonLdBase);

export const getTutor = (tutor: Tutor, id?: string): Person => {
  const person: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': id,
    'name': tutor.name,
    ...(tutor.subHeading ? { description: tutor.subHeading } : undefined),
    'image': tutor.src.src,
    'jobTitle': 'Tutor',
    ...(tutor.website ? { url: tutor.website } : undefined),
    ...(tutor.profiles?.length ? { sameAs: tutor.profiles.length === 1 ? tutor.profiles[0] : tutor.profiles } : undefined),
    'worksFor': {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.qceventplanning.com/#school',
      'url': 'https://www.qceventplanning.com',
      'name': 'QC Event School',
      'sameAs': 'sameAs' in qcEventSchoolEducationalOrganization ? qcEventSchoolEducationalOrganization.sameAs : undefined,
    },
  };

  return person;
};
