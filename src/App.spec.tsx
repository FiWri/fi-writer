import { describe, expect, it } from 'vitest';

import { render, RenderWith, screen } from '~/utils/test-utils';

import { App } from './App';

describe('App', () => {
  it('the app renders in the router', () => {
    render(<App />, RenderWith.ROUTER);
    expect(screen.getByText(/Fiwri/i)).toBeInTheDocument();
  });
});
