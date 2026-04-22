import { useState } from 'react';

import { MOCK_PRODUCTS_1000, ProductsListNoMemo, SearchInputNoMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';
import styles from './styles.module.css';

export const ListAndInputNoMemo = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Input (No Memo)</h1>
      <p className={styles.description}>
        Standard implementation without any optimizations. Every keystroke triggers a full 
        re-calculation of the filtered list and re-renders every item in the list, even if 
        they haven't changed.
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

      <ProductsListNoMemo
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
