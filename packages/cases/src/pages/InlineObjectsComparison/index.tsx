import { PageComparison } from '@cases/shared';
import { InlineObjectsFullMemo, InlineObjectsNoMemo } from '@cases/widgets';

export const InlineObjectsComparison = () => (
  <PageComparison
    pages={[
      { component: <InlineObjectsNoMemo />, label: 'No Memo' },
      { component: <InlineObjectsFullMemo />, label: 'Full Memo' }
    ]}
  />
);
