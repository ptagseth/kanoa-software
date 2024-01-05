---
id: getModeEvents
title: system.kanoa.event.getModeEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns mode events (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getModeEvents(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'assetId': 18,
    'modeEventId': 1,
    'startDate': '2023-01-01',
    'endDate': '2023-12-31'
}
modeEventsData = getModeEvents(parameters)