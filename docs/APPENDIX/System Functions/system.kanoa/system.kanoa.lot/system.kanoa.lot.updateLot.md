---
id: update-lot
title: system.kanoa.lot.updateLot
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing lot.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateLot(lotInfo, userId)</b>
  <ul>
    <li>Parameters
      <ul>
        <li>Dictionary lotInfo - Information about the lot to be updated, including lotEventId, lotName, and itemId.</li>
        <li>int userId - User ID</li>
      </ul>
    </li>
    <li>Returns
      <ul>
        <li>int - Number of records modified</li>
      </ul>
    </li>
  </ul>
</HeaderBox>

### Code Examples

```python
# Example usage
lotInfo = {'lotEventId': 1, 'lotName': 'Lot#2', 'itemId': 68}
userId = 123
recordsModified = system.kanoa.lot.updateLot(lotInfo, userId)
print(recordsModified)  # Print the number of records modified

