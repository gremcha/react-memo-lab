import { useContext, type ReactNode, type FC } from 'react';
import { RouterContext } from '../../context';

interface RouteProps {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

export const Route: FC<RouteProps> = ({ children, exact = true, path }) => {
  const currentPath = useContext(RouterContext);

  const isMatch = exact ? currentPath === path : currentPath.startsWith(path);

  if (isMatch) {
    return <>{children}</>;
  }

  return null;
};
