---
id: getWorkOrderEventSummary
title: system.kanoa.event.getWorkOrderEventSummary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns summarized production data by workorder filtered by the given parameters (kanoaOPS)
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getWorkOrderEventSummary(assetId, startDate, endDate, workOrderId)</b>
    <li>Parameters <br />
        <ul>assetId int - i.e. 18 or None for all assets.</ul>
        <ul>startDate datetime - or None</ul>
        <ul>endDate datetime - or None</ul>
        <ul>workOrder int - i.e. 34 or None for all workorders</ul>
    </li>
    <li>Returns <br />
        pyDataset
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 79
startDate = '2023-01-01'
endDate = '2023-12-31'
workOrder = 33
workOrderEventData = system.kanoa.event.getWorkOrderEventSummary(assetId, startDate, endDate, workOrder)
