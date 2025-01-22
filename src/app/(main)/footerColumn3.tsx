'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import ChatIcon from './_footerIcons/chat.svg';
import EmailIcon from './_footerIcons/email.svg';
import PhoneIcon from './_footerIcons/phone.svg';
import { ChatLink } from '@/components/chatLink';
import { TelephoneLink } from '@/components/telephoneLink';

type Props = {
  countryCode: string;
};

export const FooterColumn3: FC<Props> = ({ countryCode }) => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    setEmailAddress('info@qceventplanning.com');
  }, []);

  return (
    <>
      <li><ChatIcon className="me-2" /><ChatLink>Live Chat</ChatLink></li>
      <li><EmailIcon className="me-2" /><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
      <li><PhoneIcon className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
    </>
  );
};
