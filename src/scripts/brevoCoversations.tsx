import Script from 'next/script';
import type { FC } from 'react';

interface Props {
  conversationsId: string;
}

export const BrevoConversations: FC<Props> = ({ conversationsId }) => (
  <Script id="brevoConversations" dangerouslySetInnerHTML={{ __html: getScript(conversationsId) }} />
);

const getScript = (conversationsId: string): string => `
window.BrevoConversationsGroupID = 'p6vegH8Ac5TcDDuBk';
(function(d, w, c) {
  w.BrevoConversationsID = \`${conversationsId.replace(/`/ug, '\\`')}\`;
  w[c] = w[c] || function() {
    (w[c].q = w[c].q || []).push(arguments);
  };
  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
  if (d.head) d.head.appendChild(s);
})(document, window, 'BrevoConversations');
BrevoConversations('setColors', {
    buttonText: '#f5f5f5', /* chat button text/icon color */
    buttonBg: '#23d7bc', /* chat button background color */
    visitorBubbleBg: '#23d7bc', /* visitor's message bubble color */
    agentBubbleBg: '#ddd', /* agent's message bubble color */
});
BrevoConversations('updateIntegrationData', {
  school: 'QC Event School',
});
`;
