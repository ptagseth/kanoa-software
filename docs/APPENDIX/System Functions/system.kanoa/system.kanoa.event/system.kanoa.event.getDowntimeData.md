---
id: getDowntimeData
title: system.kanoa.event.getDowntimeData
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns downtime data filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeData(assetId, startDate, endDate, durationSecs=0, showChanged=None)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
        <ul>durationSecs (optional) - Filter downtime events for events greater than this value. Default is 0.</ul>
        <ul>showChanged (optional) - Filter downtime events that have been modified. Default is None.</ul>
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
showChanged = True
data = system.kanoa.event.getDowntimeData(assetId, startDate, endDate, durationSecs, showChanged)

