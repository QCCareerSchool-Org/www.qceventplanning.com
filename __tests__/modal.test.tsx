import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Modal } from '@/components/modal';

describe('Modal', () => {
  it('renders its children and locks scrolling while open', async () => {
    const onClose = jest.fn();

    const { rerender } = render(
      <Modal open={false} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.body.style.overflow).toBe('');

    rerender(
      <Modal open onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).not.toBeNull();
    });

    expect(document.body.style.overflow).toBe('hidden');
    expect(screen.getByText('Modal content')).not.toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));
    expect(onClose).toHaveBeenCalledTimes(1);

    rerender(
      <Modal open={false} onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull();
    });

    expect(document.body.style.overflow).toBe('');
  });

  it('closes when Escape is pressed', async () => {
    const onClose = jest.fn();

    render(
      <Modal open onClose={onClose}>
        <div>Modal content</div>
      </Modal>,
    );

    await waitFor(() => {
      expect(screen.getByRole('dialog')).not.toBeNull();
    });

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
