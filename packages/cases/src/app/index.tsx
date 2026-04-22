import {
  ListAndInputFixedHalfMemo,
  ListAndInputFullMemo,
  ListAndInputHalfMemo,
  ListAndInputNoMemo,
  InlineObjectsNoMemo,
  InlineObjectsFullMemo,
  ListAndKeysNoMemoIndexKeys,
  ListAndKeysNoMemoRandomKeys,
  ListAndKeysNoMemoNoKeys,
  ListAndKeysFullMemo
} from '@cases/widgets';
import { createRouter } from '@cases/shared/router';
import {
  HomePage,
  ListAndInputComparison,
  ListAndKeysComparison,
  InlineObjectsComparison
} from '@cases/pages';

export const AppRouter = createRouter([
  {
    element: <HomePage />,
    path: '/'
  },
  // List and Input
  { element: <ListAndInputNoMemo />, path: '/list-and-input/no-memo' },
  { element: <ListAndInputHalfMemo />, path: '/list-and-input/half-memo' },
  { element: <ListAndInputFixedHalfMemo />, path: '/list-and-input/fixed-half-memo' },
  { element: <ListAndInputFullMemo />, path: '/list-and-input/full-memo' },

  // List and Keys
  { element: <ListAndKeysNoMemoNoKeys />, path: '/list-and-keys/no-keys' },
  { element: <ListAndKeysNoMemoIndexKeys />, path: '/list-and-keys/index-keys' },
  { element: <ListAndKeysNoMemoRandomKeys />, path: '/list-and-keys/random-keys' },
  { element: <ListAndKeysFullMemo />, path: '/list-and-keys/full-memo' },

  // Inline Objects
  { element: <InlineObjectsNoMemo />, path: '/inline-objects/no-memo' },
  { element: <InlineObjectsFullMemo />, path: '/inline-objects/full-memo' },

  // Comparisons
  { element: <ListAndInputComparison />, path: '/list-and-input/comparison' },
  { element: <ListAndKeysComparison />, path: '/list-and-keys/comparison' },
  { element: <InlineObjectsComparison />, path: '/inline-objects/comparison' }
]);
