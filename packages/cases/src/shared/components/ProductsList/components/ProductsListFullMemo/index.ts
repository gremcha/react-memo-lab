import { memo } from 'react';
import { ProductsListHalfMemo } from '../ProductsListHalfMemo';

export const ProductsListFullMemo = memo(ProductsListHalfMemo);

ProductsListFullMemo.displayName = 'ProductsListFullMemo';
