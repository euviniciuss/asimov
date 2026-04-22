import { render, screen } from '@testing-library/react';

import { Heading } from './index';

describe('Heading', () => {
  it('should render with green variant by default', () => {
    render(<Heading>Services</Heading>);

    const headingElement = screen.getByText('Services');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('bg-green');
  });

  it('should render with h2 size by default', () => {
    render(<Heading>Services</Heading>);

    const headingElement = screen.getByText('Services');

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('text-h2');
  });

  it('should apply white variant', () => {
    render(<Heading variant="white">White Heading</Heading>);

    const headingElement = screen.getByText('White Heading');

    expect(headingElement).toHaveClass('bg-white');
  });

  it('should apply dark variant', () => {
    render(<Heading variant="dark">Dark Heading</Heading>);

    const headingElement = screen.getByText('Dark Heading');

    expect(headingElement).toHaveClass('bg-dark');
  });

  it('should apply h3 size', () => {
    render(<Heading size="h3">H3 Heading</Heading>);

    const headingElement = screen.getByText('H3 Heading');

    expect(headingElement).toHaveClass('text-h3');
  });
});
