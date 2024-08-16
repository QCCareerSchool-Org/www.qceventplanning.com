'use client';

import type { FC, MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';

import ChatIcon from './_footerIcons/chat.svg';
import EmailIcon from './_footerIcons/email.svg';
import PhoneIcon from './_footerIcons/phone.svg';
import { TelephoneLink } from '@/components/telephoneLink';

type Props = {
  countryCode: string;
};

export const FooterColumn3: FC<Props> = ({ countryCode }) => {
  const [ emailAddress, setEmailAddress ] = useState('');

  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  useEffect(() => {
    setEmailAddress('info@qceventplanning.com');
  }, []);

  return (
    <>
      <li><ChatIcon className="me-2" /><a onClick={handleChatLinkClick} href="#">Live Chat</a></li>
      <li><EmailIcon className="me-2" /><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
      <li><PhoneIcon className="me-2" /><TelephoneLink countryCode={countryCode} /></li>
    </>
  );
};
