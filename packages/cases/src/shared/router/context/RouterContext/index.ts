import { createContext } from 'react';

export const RouterContext = createContext<string>(typeof window !== 'undefined' ? window.location.pathname : '/');
