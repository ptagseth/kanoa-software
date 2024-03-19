---
id: getOEEDataByIntervalByShift
title: system.kanoa.event.getOEEDataByIntervalByShift
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns OEE data by interval and shift filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getOEEDataByIntervalByShift(assetId, startDate, endDate, interval)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
        <ul>interval - Interval string (e.g., 'Hour', 'Day', 'Week', None).</ul>
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
interval = 'Hour'
data = system.kanoa.event.getOEEDataByIntervalByShift(assetId, startDate, endDate, interval)

