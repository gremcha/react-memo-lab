import { type FC, useContext } from 'react';

import { OutletContext } from '../../context/OutletContext';

/**
 * Рендерит вложенные роуты текущего уровня
 */
export const Outlet: FC = () => {
  return <>{useContext(OutletContext)}</>;
};
