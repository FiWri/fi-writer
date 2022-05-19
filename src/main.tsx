import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

const container = document.getElementById('app-root');
if (!container) {
  throw new Error('Could not get the root element from DOM');
}
const root = createRoot(container);
root.render(
  // Strict mode makes React render twice to easily track side-effect
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
