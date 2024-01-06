---
id: addShiftName
title: system.kanoa.shift.addShiftName
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Adds a new shift name (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addShiftName(shiftName, userId)</b>
    <li>Parameters <br />
        <ul>shiftName (String) - Shift name.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Name ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftNameId = system.kanoa.shift.addShiftName('Evening Shift', 123)

