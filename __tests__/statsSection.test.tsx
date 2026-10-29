import { render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';

import { StatsSection } from '@/components/statsSection';

describe('StatsSection', () => {
  it('server-renders the final values at full opacity', () => {
    const html = renderToString(<StatsSection />);

    expect(html).toContain('>30<!-- -->K</div>');
    expect(html).toContain('>40</div>');
    expect(html).toContain('>15</div>');
    expect(html).not.toContain('opacity');
  });

  it('switches to the count-up animation once mounted', () => {
    render(<StatsSection />);

    expect(screen.getAllByText(/^0K?$/u)).toHaveLength(3);
  });
});
