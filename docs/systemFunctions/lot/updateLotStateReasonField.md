---
id: updateLotStateReasonField
title: system.kanoa.lot.updateLotStateReasonField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates the value of a specified field for a given lot state reason ID. If the field is 'enabled', updates the assetLink Table accordingly.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateLotStateReasonField(lotStateReasonId, field, value, userId)</b>
    <li>Parameters <br />
      <ul>int lotStateReasonId - Lot state reason ID</ul>
      <ul>string field - Name of the column to be updated</ul>
      <ul>pyObject value - New value for the specified field</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotStateReasonId = 1
field = 'enabled'
value = True
userId = 123
recordsModified = system.kanoa.lot.updateLotStateReasonField(lotStateReasonId, field, value, userId)
print(recordsModified)  # Print the number of records modified


