---
id: delete-lot-state-reason
title: system.kanoa.lot.deleteLotStateReason
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes a lot state reason. If the state has been used, sets the 'enabled' property to False.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteLotStateReason(lotStateReasonId, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>int lotStateReasonId - Lot state reason ID</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
        <li>string - Message indicating whether the reason was deleted or disabled</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonId = 1
userId = 123
recordsModified, msg = system.kanoa.lot.deleteLotStateReason(lotStateReasonId, userId)
print(recordsModified)  # Print the number of records modified
print(msg)  # Print the message indicating whether the reason was deleted or disabled
