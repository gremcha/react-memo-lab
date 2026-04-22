import type { ReactNode } from 'react';
import React from 'react';
import styles from './styles.module.css';

interface PageComparisonProps {
  pages: {
    component: ReactNode;
    label: string;
  }[];
}

export const PageComparison = ({ pages }: PageComparisonProps) => {
  return (
    <div className={styles.container}>
      {pages.map((page, index) => (
        <div
          key={index}
          className={styles.pageWrapper}
        >
          <div className={styles.pageHeader}>{page.label}</div>
          <div className={styles.pageContent}>{page.component}</div>
        </div>
      ))}
    </div>
  );
};
