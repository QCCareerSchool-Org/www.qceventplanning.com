import type { JSONValue } from 'next/dist/server/config-shared';
import Script from 'next/script';
import type { FC } from 'react';

import { safeJSON } from '@/lib/safeJSON';

interface Props {
  name: string;
  data: JSONValue;
}

export const BrevoEvent: FC<Props> = ({ name, data }) => {
  const javascript = getScript(name, data);
  return <Script id="brevoEvent" dangerouslySetInnerHTML={{ __html: javascript }} />;
};

const getScript = (name: string, data: JSONValue): string => `
window.Brevo && window.Brevo.push([ 'track', ${safeJSON(name)}, undefined, ${safeJSON(data)} ]);
`;
