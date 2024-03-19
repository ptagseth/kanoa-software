---
id: getDowntimeDataForReliability
title: system.kanoa.event.getDowntimeDataForReliability
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns downtime data for the reliability report filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeDataForReliability(assetId, startDate, endDate, durationSecs)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
        <ul>durationSecs - Filter downtime events for events greater than this value.</ul>
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
durationSecs = 60
data = system.kanoa.event.getDowntimeDataForReliability(assetId, startDate, endDate, durationSecs)

