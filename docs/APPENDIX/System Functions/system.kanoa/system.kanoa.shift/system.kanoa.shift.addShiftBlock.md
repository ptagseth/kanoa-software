---
id: addShiftBlock
title: system.kanoa.shift.addShiftBlock
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new shift block (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addShiftBlock(shiftBlockInfo, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockInfo (Dictionary) - Shift block information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Block ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftBlockInfo = {'shiftId': 1, 'startDate': someDate, 'endDate': someDate, 'rruleStr': None}
shiftBlockId = addShiftBlock(shiftBlockInfo, 123)
