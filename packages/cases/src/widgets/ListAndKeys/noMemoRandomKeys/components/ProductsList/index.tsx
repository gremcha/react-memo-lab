import type { Product } from '@cases/shared';
import { ProductCard } from '../ProductCard';
import styles from './styles.module.css';

interface ProductsListProps {
  products: Product[];
  query: string;
}

export const ProductsList = ({ products, query }: ProductsListProps) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Найдено товаров: <strong>{filteredProducts.length}</strong>
      </div>

      {/* Рендерим список с рандомными ключами */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard
              product={product}
              
              key={Math.random()}
            />
          ))
        ) : (
          <div className={styles.emptyState}>По вашему запросу ничего не найдено</div>
        )}
      </div>
    </div>
  );
};
