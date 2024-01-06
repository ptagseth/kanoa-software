---
id: getShiftBlocks
title: system.kanoa.shift.getShiftBlocks
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns shift blocks (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShiftBlocks(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter shift blocks.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift Block ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftBlocks = system.kanoa.shift.getShiftBlocks({'shiftNameId': 1, 'recurring': True})

