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
    <li>Parameters <br />
      <ul>int lotStateReasonId - Lot state reason ID</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
      <ul>string - Message indicating whether the reason was deleted or disabled</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonId = 1
userId = 123
recordsModified, msg = system.kanoa.lot.deleteLotStateReason(lotStateReasonId, userId)
print(recordsModified)  # Print the number of records modified
print(msg)  # Print the message indicating whether the reason was deleted or disabled
