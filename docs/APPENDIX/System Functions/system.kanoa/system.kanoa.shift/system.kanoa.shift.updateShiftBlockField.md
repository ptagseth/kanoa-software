---
id: updateShiftBlockField
title: system.kanoa.shift.updateShiftBlockField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates the passed field value for the given shiftBlockId (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftBlockField(shiftBlockId, field, value, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockId (Integer) - Shift Block ID.</ul>
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
modifiedRecords = system.kanoa.shift.updateShiftBlockField(1, 'startDate', newStartDate, 123)