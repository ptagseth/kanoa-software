---
id: updateShiftBlockExceptions
title: system.kanoa.shift.updateShiftBlockExceptions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Updates shift block exceptions when a shift block's start date is updated (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftBlockExceptions(shiftBlockId, newStartDate)</b>
    <li>Parameters <br />
        <ul>shiftBlockId (Integer) - Shift Block ID.</ul>
        <ul>newStartDate (Datetime) - New start date.</ul>
    </li>
    <li>Returns <br />
        <ul>None.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.shift.updateShiftBlockExceptions(1, newStartDate)