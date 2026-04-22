import { createContext, type ReactNode } from 'react';

export const OutletContext = createContext<ReactNode | null>(null);
