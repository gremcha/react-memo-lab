import type { ReactNode } from 'react';
import React from 'react';
import { Navbar } from '../Navbar';
import styles from './styles.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
