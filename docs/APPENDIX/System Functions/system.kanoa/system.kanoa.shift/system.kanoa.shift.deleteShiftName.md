---
id: deleteShiftName
title: system.kanoa.shift.deleteShiftName
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a shift name (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteShiftName(shiftNameId, userId)</b>
    <li>Parameters <br />
        <ul>shiftNameId (Integer) - Shift Name ID.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
deletedRecords = deleteShiftName(1, 123)