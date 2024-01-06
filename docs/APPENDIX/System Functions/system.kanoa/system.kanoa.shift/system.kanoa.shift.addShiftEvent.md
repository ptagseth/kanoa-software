---
id: addShiftEvent
title: system.kanoa.shift.addShiftEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Adds an entry to the shiftEvent table (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addShiftEvent(shiftEventInfo, userId)</b>
    <li>Parameters <br />
        <ul>shiftEventInfo (Dictionary) - Shift event information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Event ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftEventInfo = {'assetId': 1, 'shiftId': 2, 'tStamp': someDate}
shiftEventId = addShiftEvent(shiftEventInfo, 123)
