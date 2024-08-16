'use client';

import type { FC, MouseEventHandler } from 'react';

export const ChatLink: FC = () => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    window.LC_API?.open_chat_window?.();
  };

  return <a onClick={handleClick} href="#">Chat with Support</a>;
};
