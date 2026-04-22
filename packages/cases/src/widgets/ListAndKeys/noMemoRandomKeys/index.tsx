import { useState } from 'react';

import { MOCK_PRODUCTS_1000, SearchInputNoMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';

import { ProductsList } from './components';
import styles from './styles.module.css';

export const ListAndKeysNoMemoRandomKeys = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Keys (Random Keys)</h1>
      <p className={styles.description}>
        Generates a new random <code>key</code> for each item on every render. 
        This is a worst-case scenario: it forces React to unmount and re-mount 
        every component in the list whenever the parent re-renders.
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
