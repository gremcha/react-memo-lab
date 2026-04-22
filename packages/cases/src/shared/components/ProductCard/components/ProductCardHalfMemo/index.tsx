import { useMemo } from 'react';
import type { Product } from '@cases/shared/types';
import styles from '../../styles.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCardHalfMemo = ({ product }: ProductCardProps) => {
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(product.price);
  }, [product.price]);

  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder} />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.tags}>
          {product.tags.map(tag => (
            <span
              key={tag}
              className={styles.tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.footer}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.stock}>{product.inStock ? 'В наличии' : 'Нет в наличии'}</span>
        </div>
      </div>
    </div>
  );
};
