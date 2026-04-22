import { useState } from 'react';

import { MOCK_PRODUCTS_1000, ProductsListFullMemo, SearchInputFullMemo } from '@cases/shared';
import '@cases/shared/styles/variables.css';
import styles from './styles.module.css';

export const ListAndInputFullMemo = () => {
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>List and Input (Full Memo)</h1>
      <p className={styles.description}>
        Maximum performance optimization. Uses <code>useMemo</code> for filtering, 
        <code>memo</code> for child components, and ensures all props passed to children 
        have stable references. Only the necessary parts of the UI are re-rendered.
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

      {/* фулл мемо должно быть без мемоизации карточки */}
      <ProductsListFullMemo
        products={MOCK_PRODUCTS_1000}
        query={filter}
      />
    </div>
  );
};
