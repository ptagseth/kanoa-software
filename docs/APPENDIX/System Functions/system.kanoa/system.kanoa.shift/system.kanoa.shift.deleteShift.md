---
id: deleteShift
title: system.kanoa.shift.deleteShift
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a shift (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteShift(shiftId, userId)</b>
    <li>Parameters <br />
        <ul>shiftId (Integer) - Shift ID.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.shift.deletedRecords = deleteShift(1, 123)

