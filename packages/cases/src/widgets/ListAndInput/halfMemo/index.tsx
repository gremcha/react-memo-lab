import { useState } from 'react';

import { MOCK_PRODUCTS_1000, ProductsListHalfMemo, SearchInputHalfMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';
import styles from './styles.module.css';

export const ListAndInputHalfMemo = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Input (Half Memo)</h1>
      <p className={styles.description}>
        Uses <code>useMemo</code> for filtering the product list to avoid expensive calculations 
        on unrelated state changes (like the second input). However, since child components aren't 
        memoized, they still re-render when the parent updates.
      </p>

      <SearchInputHalfMemo
        value={filter}
        onChange={setFilter}
      />

      <SearchInputHalfMemo
        value={filter2}
        onChange={setFilter2}
        placeholder='Just text input'
      />

      <ProductsListHalfMemo
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
