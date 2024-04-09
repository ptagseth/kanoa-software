---
id: deleteLot
title: system.kanoa.lot.deleteLot
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes a lot.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteLot(lotId, userId)</b>
    <li>Parameters <br />
      <ul>int lotId - Lot ID to be deleted</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotId = 1
userId = 123
recordsModified = system.kanoa.lot.deleteLot(lotId, userId)
print(recordsModified)  # Print the number of records modified

