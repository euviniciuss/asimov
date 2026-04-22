import { render, screen } from '@testing-library/react';

import { ArrowLink } from './index';

describe('ArrowLink', () => {
  it('should render with transparent background by default', () => {
    render(<ArrowLink href="/test">Learn more</ArrowLink>);

    const linkElement = screen.getByRole('link', { name: 'Learn more' });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('bg-transparent');
  });

  it('should render with dark background', () => {
    render(
      <ArrowLink href="/test" background="dark">
        Dark Link
      </ArrowLink>,
    );

    const linkElement = screen.getByRole('link', { name: 'Dark Link' });

    expect(linkElement).toHaveClass('bg-dark');
  });

  it('should render with green background', () => {
    render(
      <ArrowLink href="/test" background="green">
        Green Link
      </ArrowLink>,
    );

    const linkElement = screen.getByRole('link', { name: 'Green Link' });

    expect(linkElement).toHaveClass('bg-green');
  });
});
