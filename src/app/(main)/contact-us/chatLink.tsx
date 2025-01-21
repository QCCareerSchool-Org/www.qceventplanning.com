'use client';

import type { FC, MouseEventHandler } from 'react';

export const ChatLink: FC = () => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.BrevoConversations?.('openChat');
  };

  return <a onClick={handleClick} href="#">Chat with Support</a>;
};
