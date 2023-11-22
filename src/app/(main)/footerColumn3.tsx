'use client';

import type { FC } from 'react';

import { TelephoneNumber } from '@/components/telephoneNumber';

export const FooterColumn3: FC = () => {
  const handleChatLinkClick = (): void => {
    //
  };

  return (
    <>
      <li><a onClick={handleChatLinkClick} href="#">Chat</a></li>
      <li><a href="mailto:info@qceventplanning.com">Email</a></li>
      <li><TelephoneNumber /></li>
      <li><a href="https://studentcenter.qccareerschool.com/students" target="_blank" rel="noreferrer">Student Login</a></li>
    </>
  );
};
