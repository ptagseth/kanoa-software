---
id: addShift
title: system.kanoa.shift.addShift
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new shift (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addShift(shiftInfo, userId)</b>
    <li>Parameters <br />
        <ul>shiftInfo (Dictionary) - Shift information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftInfo = {'shiftNameId': 1, 'assetId': 18, 'shiftColor': '#00FF00'}
shiftId = system.kanoa.shift.addShift(shiftInfo, 123)
