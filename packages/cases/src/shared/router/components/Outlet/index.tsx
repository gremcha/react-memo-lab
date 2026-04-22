import { useContext } from 'react';

import { OutletContext } from '../../context/OutletContext';

/**
 * Рендерит вложенные роуты текущего уровня
 */
export const Outlet = () => {
  return <>{useContext(OutletContext)}</>;
};
