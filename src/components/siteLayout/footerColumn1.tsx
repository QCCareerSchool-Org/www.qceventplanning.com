import Link from 'next/link';
import type { FC } from 'react';

export const FooterColumn1: FC = () => (
  <>
    <li><Link href="/online-event-courses/event-and-wedding-planning">Event &amp; Wedding Planning</Link></li>
    <li><Link href="/online-event-courses/corporate-event-planning">Corporate Event Planning</Link></li>
    <li><Link href="/online-event-courses/wedding-planning">Wedding Planning</Link></li>
    <li><Link href="/online-event-courses/event-decor">Event Decor</Link></li>
    <li><Link href="/online-event-courses/floral-design">Floral Design</Link></li>
    <li><Link href="/online-event-courses/luxury-wedding-and-event-planning">Luxury Wedding<span className="d-lg-none d-xl-inline"> &amp; Event</span> Planning</Link></li>
    <li><Link href="/online-event-courses/destination-wedding-planning">Destination Wedding Planning</Link></li>
  </>
);
