---
id: addLotEvent
title: system.kanoa.lot.addLotEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Adds a new lot event.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>addLotEvent(lotEventInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary lotEventInfo - Information about the lot event, including lotId, lotEventQty, itemUnitId, assetId, itemSourceId, lotStateId, lotStateReasonId, workOrderId, shiftId, tStamp, and comment.</ul>
      <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Lot event ID</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotEventInfo = {'lotId': 1, 'lotEventQty': 100, 'itemUnitId': 2, 'workOrderId': 56, 'assetId': 1, 'itemSourceId': 2, 'lotStateId': 7, 'lotStateReasonId': 78, 'shiftId': 4, 'tStamp': somedate, 'comment': None}
userId = 123
lotEventId = system.kanoa.lot.addLotEvent(lotEventInfo, userId)
print(lotEventId)  # Print the added lot event ID

