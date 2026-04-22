import { useMemo } from 'react';
import type { Product } from '@cases/shared/types';
import { ProductCardHalfMemo } from '@cases/shared/components/ProductCard';
import styles from '../../styles.module.css';

interface ProductsListProps {
  products: Product[];
  query: string;
}

export const ProductsListHalfMemo = ({ products, query }: ProductsListProps) => {
  const filteredProducts = useMemo(() => {
    return products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
  }, [products, query]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Найдено товаров: <strong>{filteredProducts.length}</strong>
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCardHalfMemo
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className={styles.emptyState}>По вашему запросу ничего не найдено</div>
        )}
      </div>
    </div>
  );
};
