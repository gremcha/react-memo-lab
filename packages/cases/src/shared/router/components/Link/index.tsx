import { type FC } from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '') || '';

export const Link: FC<LinkProps> = ({ children, onClick, to, ...rest }) => {
  const fullPath = `${BASE_URL}${to}`;

  const preventReload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (onClick) {
      onClick(event);
    }

    if (window.location.pathname !== fullPath) {
      window.history.pushState({}, '', fullPath);
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  };

  return (
    <a
      href={fullPath}
      onClick={preventReload}
      {...rest}
    >
      {children}
    </a>
  );
};
