---
id: addShiftBlockException
title: system.kanoa.shift.addShiftBlockException
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Adds a shift block exception (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addShiftBlockException(shiftBlockId, exceptionDate, userId)</b>
    <li>Parameters <br />
        <ul>shiftBlockId (Integer) - Shift Block ID.</ul>
        <ul>exceptionDate (Datetime) - Exception date.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Block Exception ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftBlockExceptionId = system.kanoa.shift.addShiftBlockException(1, someDate, 123)
