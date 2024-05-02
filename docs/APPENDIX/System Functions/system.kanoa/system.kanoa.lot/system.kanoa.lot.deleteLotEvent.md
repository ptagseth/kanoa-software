---
id: delete-lot-event
title: system.kanoa.lot.deleteLotEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Deletes a lot event.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>deleteLotEvent(lotEventId, userId)</b>
    <li>Parameters <br />
      <ul>int lotEventId - Lot event ID to be deleted</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotEventId = 76
userId = 123
recordsModified = system.kanoa.lot.deleteLotEvent(lotEventId, userId)
print(recordsModified)  # Print the number of records modified

