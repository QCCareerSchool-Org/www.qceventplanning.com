import { headers } from 'next/headers';

import { ActiveCampaginForm } from '@/components/activeCampaignForm';
import { getParam } from '@/lib/getParam';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const ACPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const { countryCode } = await getServerData(props.searchParams);

  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  const headerList = await headers();
  const referrer = headerList.get('referer');

  return (
    <section>
      <div className="container">
        <ActiveCampaginForm
          successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qceventplanning.com'}/thank-you-course-catalog`}
          requiredIds={[ 32n ]}
          optionalIds={[ 25n ]}
          gclid={gclid}
          msclkid={msclkid}
          utmSource={utmSource}
          utmMedium={utmMedium}
          utmCampaign={utmCampaign}
          utmContent={utmContent}
          utmTerm={utmTerm}
          placeholders
          referrer={referrer}
          countryCode={countryCode}
        />
      </div>
    </section>
  );
};

export default ACPage;
