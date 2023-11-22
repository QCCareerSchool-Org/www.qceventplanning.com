import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn1: FC = () => (
  <>
    <li><Link href="/courses/event-and-wedding-planning">Event &amp; Wedding Planning</Link></li>
    <li><Link href="/courses/corporate-event-planning">Corporate Event Planning</Link></li>
    <li><Link href="/courses/wedding-planning">Wedding Planning</Link></li>
    <li><Link href="/courses/event-decor">Event Decor</Link></li>
    <li><Link href="/courses/floral-design">Floral Design</Link></li>
    <li><Link href="/courses/luxury-wedding-planning">Luxury Wedding Planning</Link></li>
    <li><Link href="/courses/destination-wedding-planning">Destination Wedding Planning</Link></li>
  </>
);
