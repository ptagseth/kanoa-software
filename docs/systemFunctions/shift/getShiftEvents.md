---
id: getShiftEvents
title: system.kanoa.shift.getShiftEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns shift events for the given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShiftEvents(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter shift events.  ie &#123;'assetId':1}</ul>
    </li>
    <li>Returns <br />
        <ul>(dataset) Shift Events data.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
shiftData = system.kanoa.shift.getShiftEvents({'assetId': 1})
