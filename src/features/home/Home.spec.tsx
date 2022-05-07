import { describe, expect, it } from 'vitest';

import { render, RenderWith, screen } from '~/utils/test-utils';

import { Home } from './Home';

describe('Home', () => {
  it('the home component renders with providers', () => {
    render(<Home />, RenderWith.ALL);
    expect(screen.getByText(/Fiwri/i)).toBeInTheDocument();
  });
});
