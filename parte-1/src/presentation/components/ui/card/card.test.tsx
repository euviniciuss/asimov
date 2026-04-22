import { render, screen } from '@testing-library/react';

import { Card, CardDescription, CardTitle } from './index';

describe('Card', () => {
  it('should render content with base semantic structure', () => {
    render(
      <Card data-testid="card-root">
        <CardTitle>Titulo</CardTitle>
        <CardDescription>Descricao</CardDescription>
      </Card>,
    );

    expect(screen.getByTestId('card-root').tagName).toBe('ARTICLE');
    expect(screen.getByText('Titulo')).toBeInTheDocument();
    expect(screen.getByText('Descricao')).toBeInTheDocument();
  });
});
