---
id: updateShiftBlock
title: system.kanoa.shift.updateShiftBlock
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates a shift block (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftBlock(shiftBlockInfo, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockInfo (Dictionary) - Shift block information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modifiedRecords = system.kanoa.shift.updateShiftBlock({'shiftBlockId': 1, 'shiftId': 2, 'startDate': newDate, 'endDate': newDate, 'rruleStr': 'FREQ=WEEKLY;COUNT=10'}, 123)

