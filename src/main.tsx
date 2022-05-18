import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

ReactDOM.render(
  // <React.StrictMode> <= Strict mode makes React render twice to easily track side-effect
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
