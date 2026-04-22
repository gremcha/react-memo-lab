import type { Product } from '@cases/shared/types';
import { ProductCardNoMemo } from '@cases/shared/components/ProductCard';
import styles from '../../styles.module.css';

interface ProductsListProps {
  products: Product[];
  query: string;
}

export const ProductsListNoMemo = ({ products, query }: ProductsListProps) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Найдено товаров: <strong>{filteredProducts.length}</strong>
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCardNoMemo
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
