---
id: getModeEvents
title: system.kanoa.event.getModeEvents
hide_table_of_contents: true
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
    'WorkOrderId': 1234,
    'startDate': '2023-01-01',
    'endDate': '2023-12-31'
}
mode_events_data = system.kanoa.event.getModeEvents(params_dict)