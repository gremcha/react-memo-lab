import { memo, useState } from 'react';

import { MOCK_PRODUCTS_1000, ProductsListHalfMemo, SearchInputNoMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';
import styles from './styles.module.css';

const FixedProductsListHalfMemo = memo(ProductsListHalfMemo);

export const ListAndInputFixedHalfMemo = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Input (Half Memo)</h1>
      <p className={styles.description}>
        An attempt to fix unnecessary re-renders by stabilizing props and using correct memoization
        patterns. Demonstrates the impact of stable references on performance.
      </p>

      <SearchInputNoMemo
        value={filter}
        onChange={setFilter}
      />

      <SearchInputNoMemo
        value={filter2}
        onChange={setFilter2}
        placeholder='Just text input'
      />

      <FixedProductsListHalfMemo
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
