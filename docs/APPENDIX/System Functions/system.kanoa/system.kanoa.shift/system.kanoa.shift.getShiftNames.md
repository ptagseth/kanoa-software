---
id: getShiftNames
title: system.kanoa.shift.getShiftNames
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Returns shift names (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShiftNames(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter shift names.</ul>
    </li>
    <li>Returns <br />
        <ul>Shift ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftNames = system.kanoa.shift.getShiftNames({'shiftNameId': 1, 'shiftName': 'Day Shift'})
