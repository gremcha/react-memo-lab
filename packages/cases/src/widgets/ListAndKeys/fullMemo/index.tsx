import { useState } from 'react';

import { MOCK_PRODUCTS_1000, ProductsListFullMemo, SearchInputFullMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';
import styles from './styles.module.css';

export const ListAndKeysFullMemo = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Keys (Correct Keys & Full Memo)</h1>
      <p className={styles.description}>
        Using unique, stable IDs as <code>key</code> combined with full 
        memoization. This ensures maximum efficiency and correct behavior 
        during list updates and re-renders.
      </p>

      <SearchInputFullMemo
        value={filter}
        onChange={setFilter}
      />

      <SearchInputFullMemo
        value={filter2}
        onChange={setFilter2}
        placeholder='Just text input'
      />

      <ProductsListFullMemo
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
