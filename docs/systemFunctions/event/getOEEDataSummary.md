---
id: getOEEDataSummary
title: system.kanoa.event.getOEEDataSummary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns summarized OEE data filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getOEEDataSummary(assetId, startDate, endDate)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
    </li>
    <li>Returns <br />
        data (pyDataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
startDate = timestamp_start
endDate = timestamp_end
data = system.kanoa.event.getOEEDataSummary(assetId, startDate, endDate)

