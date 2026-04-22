import { memo, useCallback, useState } from 'react';
import { ProductCard } from './components';
import styles from './styles.module.css';

export const InlineObjectsFullMemo = memo(() => {
  const [views, setViews] = useState(0);

  const onIncrement = useCallback(() => setViews(v => v + 1), []);

  return (
    <div className={styles.productPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>MacBook Pro 16" (Full Memo)</h1>
        <p className={styles.description}>
          Everything is memoized. Objects and functions use stable references, 
          so the heavy components in the product card won't re-render unless 
          absolutely necessary, keeping the UI smooth.
        </p>

        <button
          onClick={onIncrement}
          className={styles.viewButton}
        >
          Views: {views} (Click fast!)
        </button>
      </div>

      {/* ПОЛНАЯ МЕМОИЗАЦИЯ */}
      <ProductCard title='Apple MacBook Pro 16-inch (2023)' />
    </div>
  );
});
