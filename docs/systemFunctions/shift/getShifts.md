---
id: getShifts
title: system.kanoa.shift.getShifts
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns shifts (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShifts(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter shifts.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shifts = system.kanoa.shift.getShifts({'shiftNameId': 1, 'assetPath': 'Factory%', 'assetTypeName': 'Production Line'})