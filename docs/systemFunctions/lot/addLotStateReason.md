---
id: addLotStateReason
title: system.kanoa.lot.addLotStateReason
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds a new lot state reason.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addLotStateReason(stateInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary stateInfo - Information about the lot state reason to be added, including lotStateReasonName, lotStateId, and enabled.</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - State ID</ul>
    </li>

</HeaderBox>

### Code Examples

```python
# Example usage
stateInfo = {'lotStateReasonName': 'my state reason', 'lotStateId': 1, 'enabled': True}
userId = 123
stateId = system.kanoa.lot.addLotStateReason(stateInfo, userId)
print(stateId)  # Print the added state ID

