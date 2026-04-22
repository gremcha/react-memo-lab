import { PRODUCT_BRANDS, PRODUCT_CATEGORIES, PRODUCT_ITEMS, PRODUCT_TAGS } from '../../constants';
import type { Product } from '../../types';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const generateModelCode = () => {
  const prefix = CHARS[Math.floor(Math.random() * CHARS.length)];
  const mid = Math.random() > 0.5 ? '-' : '';
  const suffix = Math.floor(Math.random() * 900 + 100);

  return `${prefix}${mid}${suffix}`;
};

export const generateMockProducts = (count: number): Product[] => {
  return Array.from({ length: count }, (_, index) => {
    const id = `prod-${index + 1}`;
    const brand = PRODUCT_BRANDS[Math.floor(Math.random() * PRODUCT_BRANDS.length)];
    const item = PRODUCT_ITEMS[Math.floor(Math.random() * PRODUCT_ITEMS.length)];
    const modelCode = generateModelCode();

    const category = PRODUCT_CATEGORIES[Math.floor(Math.random() * PRODUCT_CATEGORIES.length)];
    const tags = [
      ...new Set(
        Array.from(
          { length: Math.floor(Math.random() * 2) + 1 },
          () => PRODUCT_TAGS[Math.floor(Math.random() * PRODUCT_TAGS.length)]
        )
      )
    ];

    return {
      category,
      description: `Professional solution for your home: ${item} model ${modelCode} from ${brand}. High reliability and innovative technologies.`,
      discountPercentage: Math.random() > 0.8 ? Math.floor(Math.random() * 25) + 5 : 0,
      id,
      inStock: Math.random() > 0.15,
      price: Math.floor(Math.random() * 180000) + 2000,
      rating: {
        rate: parseFloat((Math.random() * 2 + 3).toFixed(1)),
        reviewsCount: Math.floor(Math.random() * 1000)
      },
      tags,
      title: `${brand} ${item} ${modelCode}`
    };
  });
};
