import type { Product } from '@cases/shared';
import styles from './styles.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const finalPrice =
    product.discountPercentage > 0
      ? product.price - product.price * (product.discountPercentage / 100)
      : product.price;

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>{product.title.charAt(0)}</div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.priceSection}>
            <span className={styles.price}>${finalPrice.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <div className={styles.oldPrice}>${product.price.toFixed(2)}</div>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          {product.tags.map(tag => (
            <span
              key={tag}
              className={styles.tag}
            >
              {tag}
            </span>
          ))}

          <span className={styles.rating}>
            ★ {product.rating.rate} ({product.rating.reviewsCount} отзывов)
          </span>
        </div>
      </div>
    </div>
  );
};
