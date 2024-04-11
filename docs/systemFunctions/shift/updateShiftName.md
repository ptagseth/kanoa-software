---
id: updateShiftName
title: system.kanoa.shift.updateShiftName
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates a shift name (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftName(shiftName, shiftNameId, userId)</b>
    <li>Parameters <br />
        <ul>shiftName (String) - Shift name.</ul>
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
modifiedRecords = system.kanoa.shift.updateShiftName('Updated Shift Name', 1, 123)