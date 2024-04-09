---
id: addLot
title: system.kanoa.lot.addLot
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds a new lot.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addLot(lotInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary lotInfo - Information about the lot to be added, including lotName and itemId.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Lot ID</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotInfo = {'lotName': 'Lot#1', 'itemId': 67}
userId = 123
lotId = system.kanoa.lot.addLot(lotInfo, userId)
print(lotId)  # Print the added lot ID