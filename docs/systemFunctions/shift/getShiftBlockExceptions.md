---
id: getShiftBlockExceptions
title: system.kanoa.shift.getShiftBlockExceptions
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns shift block exceptions (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShiftBlockExceptions(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter shift block exceptions.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Block Exception data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftBlockExceptions = system.kanoa.shift.getShiftBlockExceptions({'shiftBlockId': 1})
