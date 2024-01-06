---
id: deleteShiftEvents
title: system.kanoa.shift.deleteShiftEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Deletes entries from the shiftEvent table (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteShiftEvents(shiftEventInfo)</b>
    <li>Parameters <br />
        <ul>shiftEventInfo (Dictionary) - Shift event information.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftEventInfo = {'assetId': 1, 'startDate': someStartDate, 'endDate': someEndDate}
deletedRecords = deleteShiftEvents(shiftEventInfo)

