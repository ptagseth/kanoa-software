---
id: update-lot
title: system.kanoa.lot.updateLot
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing lot.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateLot(lotInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary lotInfo - Information about the lot to be updated, including lotEventId, lotName, and itemId.</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotInfo = {'lotEventId': 1, 'lotName': 'Lot#2', 'itemId': 68}
userId = 123
recordsModified = system.kanoa.lot.updateLot(lotInfo, userId)
print(recordsModified)  # Print the number of records modified

