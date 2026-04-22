import type { ReactNode } from 'react';
import React, { useState, useEffect } from 'react';
import { RouterContext } from '../../context';

interface RouterProps {
  children: ReactNode;
}

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

export const Router: React.FC<RouterProps> = ({ children }) => {
  const normalizePath = (path: string) => {
    if (BASE_URL && path.startsWith(BASE_URL)) {
      return path.slice(BASE_URL.length) || '/';
    }
    return path;
  };

  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return <RouterContext.Provider value={currentPath}>{children}</RouterContext.Provider>;
};
