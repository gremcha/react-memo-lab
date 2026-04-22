import { useContext } from 'react';
import { RouterContext } from '../../context';

export const useRouter = () => {
  const currentPath = useContext(RouterContext);

  const push = (path: string) => {
    window.history.pushState({}, '', path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return { currentPath, push };
};
