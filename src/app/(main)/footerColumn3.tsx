import type { FC } from 'react';

import ChatIcon from './_footerIcons/chat.svg';
import EmailIcon from './_footerIcons/email.svg';
import PhoneIcon from './_footerIcons/phone.svg';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { TelephoneLink } from '@/components/telephoneLink';

type Props = {
  countryCode: string;
};

export const FooterColumn3: FC<Props> = ({ countryCode }) => (
  <>
    <li><ChatIcon className="me-2" /><ChatLink>Live Chat</ChatLink></li>
    <li><EmailIcon className="me-2" /><EmailLink /></li>
    <li><PhoneIcon className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
  </>
);
