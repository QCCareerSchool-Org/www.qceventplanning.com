'use client';

import type { FC, MouseEventHandler } from 'react';
import { useEffect, useState } from 'react';

import { TelephoneLink } from '@/components/telephoneLink';

export const FooterColumn3: FC = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  const handleChatLinkClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window();
  };

  useEffect(() => {
    setEmailAddress('info@qceventplanning.com');
  }, []);

  return (
    <>
      <li><a onClick={handleChatLinkClick} href="#">Live Chat</a></li>
      <li><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
      <li><TelephoneLink /></li>
    </>
  );
};
