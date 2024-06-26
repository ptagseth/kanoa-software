---
id: update-lot-event
title: system.kanoa.lot.updateLotEvent
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of the <b>kanoaOPS</b> module</PurpleBox>

<HeaderBox header="Description">
  Updates an existing lot event.
</HeaderBox>

<HeaderBox header="Syntax">
  <b>updateLotEvent(lotEventInfo, userId)</b>
    <li>Parameters <br />
      <ul>Dictionary lotEventInfo - Information about the lot event to be updated, including lotEventId, lotId, lotEventQty, itemUnitId, assetId, itemSourceId, lotStateId, lotStateReasonId, workOrderId, shiftId, tStamp, and comment.</ul>
        <ul>int userId - User ID</ul>
    </li>
    <li>Returns <br />
      <ul>int - Number of records modified</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example usage
lotEventInfo = {'lotEventId': 76, 'lotId': 1, 'workOrderId': 56, 'assetId': 1, 'itemSourceId': 2, 'lotStateId': 7, 'lotStateReasonId': 78, 'shiftId': 4, 'tStamp': somedate, 'comment': None}
userId = 123
recordsModified = system.kanoa.lot.updateLotEvent(lotEventInfo, userId)
print(recordsModified)  # Print the number of records modified

