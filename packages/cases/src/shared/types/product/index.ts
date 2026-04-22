import type { PRODUCT_CATEGORIES, PRODUCT_TAGS } from '../../constants';

export type Category = (typeof PRODUCT_CATEGORIES)[number];

export type Tag = (typeof PRODUCT_TAGS)[number];

export interface Product {
  category: Category;
  discountPercentage: number;
  id: string;
  inStock: boolean;
  price: number;
  rating: {
    rate: number;
    reviewsCount: number;
  };
  tags: Tag[];
  title: string;
}
