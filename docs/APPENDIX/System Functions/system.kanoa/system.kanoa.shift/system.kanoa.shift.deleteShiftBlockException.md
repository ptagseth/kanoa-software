---
id: deleteShiftBlockExceptions
title: system.kanoa.shift.deleteShiftBlockExceptions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Deletes shift block exceptions (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteShiftBlockExceptions(shiftBlockExceptionId, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockExceptionId (Integer) - Shift Block Exception ID.</ul>
        <ul>userId (int) - The user ID.</ul>
    </li>
    <li>Returns <br />
        <ul>(int) - # records modified</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
records = system.kanoa.shift.deleteShiftBlockExceptions(12, 123)