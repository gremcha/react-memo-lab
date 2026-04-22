import { PageComparison } from '@cases/shared';
import {
  ListAndInputFixedHalfMemo,
  ListAndInputFullMemo,
  ListAndInputHalfMemo,
  ListAndInputNoMemo
} from '@cases/widgets';

export const ListAndInputComparison = () => (
  <PageComparison
    pages={[
      { component: <ListAndInputNoMemo />, label: 'No Memo' },
      { component: <ListAndInputHalfMemo />, label: 'Half Memo' },
      { component: <ListAndInputFixedHalfMemo />, label: 'Fixed Half Memo' },
      { component: <ListAndInputFullMemo />, label: 'Full Memo' }
    ]}
  />
);
