import { useState } from 'react';

import { MOCK_PRODUCTS_1000, SearchInputNoMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';

import { ProductsList } from './components';
import styles from './styles.module.css';

export const ListAndKeysNoMemoIndexKeys = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Keys (Index Keys)</h1>
      <p className={styles.description}>
        Explicitly using array indexes as <code>key</code>. While this suppresses 
        React console warnings, it remains an anti-pattern for lists where items 
        can be re-ordered, filtered, or deleted.
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

      <ProductsList
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
