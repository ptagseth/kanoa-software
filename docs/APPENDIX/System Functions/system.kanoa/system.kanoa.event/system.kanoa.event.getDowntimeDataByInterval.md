---
id: getDowntimeDataByInterval
title: system.kanoa.event.getDowntimeDataByInterval
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns downtime data by interval filtered by the given parameters. 
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeDataByInterval(assetId, startDate, endDate, interval, offsetMins=0)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
        <ul>interval - Interval (i.e., 'Hour', 'Day', 'Week', None - If None, the interval will be auto-calculated).</ul>
        <ul>offsetMins (optional) - Offset in minutes. Default is 0.</ul>
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
offsetMins = 30
data = system.kanoa.event.getDowntimeDataByInterval(assetId, startDate, endDate, interval, offsetMins)

