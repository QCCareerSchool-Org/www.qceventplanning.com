import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { IPProvider } from './ipProvider';
import { ScreenSizeProvider } from './screenSizeProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';
import { TaxCreditPopupProvider } from './taxCreditPopupProvider';
import { UserValuesProvider } from './userValuesProvider';
import type { UserValues } from '@/domain/userValues';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

interface Props {
  userValues?: UserValues;
  clientIp: string | null;
}

export const Provider: FC<PropsWithChildren<Props>> = ({ children, userValues, clientIp }) => (
  <UserValuesProvider {...userValues}>
    <IPProvider clientIp={clientIp}>
      <ScreenSizeProvider>
        <ScrollPositionProvider>
          <CaptchaProvider reCaptchaKey={reCaptchaKey}>
            <TaxCreditPopupProvider>
              {children}
            </TaxCreditPopupProvider>
          </CaptchaProvider>
        </ScrollPositionProvider>
      </ScreenSizeProvider>
    </IPProvider>
  </UserValuesProvider>
);
