import type { ReactNode } from 'react';

import { Layout } from '@cases/shared/components';

import { Router, Route } from '../../components';
import { OutletContext } from '../../context/OutletContext';

export interface RouteConfig {
  element: ReactNode;
  path: string;
  children?: RouteConfig[]; // Вложенные роуты
  label?: string; // Если строка передана, роут появится в навигации
}

const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      exact={!route.children || route.children.length === 0}
    >
      <OutletContext.Provider value={route.children ? renderRoutes(route.children) : null}>
        {route.element}
      </OutletContext.Provider>
    </Route>
  ));
};

export const createRouter = (routes: RouteConfig[]) => {
  return (
    <Router>
      <Layout>{renderRoutes(routes)}</Layout>
    </Router>
  );
};
