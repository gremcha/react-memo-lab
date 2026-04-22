import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from '@cases';

import '@cases/shared/styles/variables.css';
import '@cases/shared/styles/index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {AppRouter}
    </StrictMode>
  );
}
