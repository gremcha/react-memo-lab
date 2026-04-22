import { useState } from 'react';

import { MOCK_PRODUCTS_1000, SearchInputNoMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';

import { ProductsList } from './components';
import styles from './styles.module.css';

export const ListAndKeysNoMemoNoKeys = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Keys (No Keys)</h1>
      <p className={styles.description}>
        Demonstrates rendering a list without the <code>key</code> prop. React will 
        default to using array indexes and show a warning in the console. This is 
        problematic for stateful components during list mutations.
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
