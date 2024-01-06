---
id: updateShiftEvents
title: system.kanoa.shift.updateShiftEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOps</b> module</PurpleBox>
<HeaderBox header="Description">Called by the gateway timer script, this function adds shift events for all OEE-enabled assets (kanoaOps).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateShiftEvents(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter OEE-enabled assets.</ul>
    </li>
    <li>Returns <br />
        <ul>None.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
updateShiftEvents({'assetPath': 'somePath', 'startDate': someDate, 'endDate': someDate})

