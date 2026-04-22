import { PageComparison } from '@cases/shared';
import {
  ListAndKeysFullMemo,
  ListAndKeysNoMemoIndexKeys,
  ListAndKeysNoMemoNoKeys,
  ListAndKeysNoMemoRandomKeys
} from '@cases/widgets';

export const ListAndKeysComparison = () => (
  <PageComparison
    pages={[
      { component: <ListAndKeysNoMemoNoKeys />, label: 'No Keys' },
      { component: <ListAndKeysNoMemoIndexKeys />, label: 'Index Keys' },
      { component: <ListAndKeysNoMemoRandomKeys />, label: 'Random Keys' },
      { component: <ListAndKeysFullMemo />, label: 'Full Memo' }
    ]}
  />
);
