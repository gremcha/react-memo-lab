import { useState } from 'react';
import { ProductCard } from './components';
import styles from './styles.module.css';

export const InlineObjectsNoMemo = () => {
  const [views, setViews] = useState(0);

  return (
    <div className={styles.productPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>MacBook Pro 16" (No Memo)</h1>
        <p className={styles.description}>
          Click the views button below. You'll notice re-renders even in "static" parts of the card
          because inline objects and functions are passed as props, creating fresh references on
          every render.
        </p>

        <button
          onClick={() => setViews(v => v + 1)}
          className={styles.viewButton}
        >
          Views: {views} (Click fast!)
        </button>
      </div>

      <ProductCard title='Apple MacBook Pro 16-inch (2023)' />
    </div>
  );
};
