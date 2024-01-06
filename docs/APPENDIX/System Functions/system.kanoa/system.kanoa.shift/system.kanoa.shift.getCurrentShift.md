---
id: getCurrentShift
title: system.kanoa.shift.getCurrentShift
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns the current shift for the given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getCurrentShift(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter current shift.</ul>
    </li>
    <li>Returns <br />
        <ul>Current shift data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
currentShift = getCurrentShift({'assetId': 1})

