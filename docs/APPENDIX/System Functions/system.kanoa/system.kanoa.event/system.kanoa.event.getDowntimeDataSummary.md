---
id: getDowntimeDataSummary
title: system.kanoa.event.getDowntimeDataSummary
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns summarized downtime data filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeDataSummary(assetId, startDate, endDate)</b>
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
data = system.kanoa.event.getDowntimeDataSummary(assetId, startDate, endDate)

