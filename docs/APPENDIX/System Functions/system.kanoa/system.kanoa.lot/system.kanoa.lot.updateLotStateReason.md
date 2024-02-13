---
id: update-lot-state-reason
title: system.kanoa.lot.updateLotStateReason
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing lot state reason.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateLotStateReason(stateInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary stateInfo - Information about the lot state reason to be updated, including lotStateReasonId, lotStateReasonName, lotStateId, and enabled.</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>pyDataset</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
stateInfo = {'lotStateReasonId': 1, 'lotStateReasonName': 'new state reason', 'lotStateId': 1, 'enabled': False}
userId = 123
dataset = system.kanoa.lot.updateLotStateReason(stateInfo, userId)
print(dataset)  # Print the updated dataset

