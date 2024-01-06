---
id: updateShiftField
title: system.kanoa.shift.updateShiftField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates the passed field value for the given shiftId (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftField(shiftId, field, value, userId)</b>
    <li>Parameters <br />
        <ul>shiftId (Integer) - Shift ID.</ul>
        <ul>field (String) - Name of the column.</ul>
        <ul>value (Object) - New value.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
modifiedRecords = system.kanoa.shift.updateShiftField(1, 'shiftNameId', 3, 123)