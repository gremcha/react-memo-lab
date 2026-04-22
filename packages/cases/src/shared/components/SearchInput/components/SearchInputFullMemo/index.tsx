import { memo } from 'react';
import { SearchInputHalfMemo } from '../SearchInputHalfMemo';

export const SearchInputFullMemo = memo(SearchInputHalfMemo);

SearchInputFullMemo.displayName = 'SearchInputFullMemo';
