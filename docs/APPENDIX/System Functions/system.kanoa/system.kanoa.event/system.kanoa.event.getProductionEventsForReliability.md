---
id: getProductionEventsForReliability
title: system.kanoa.event.getProductionEventsForReliability
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns production data for the reliability report filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionEventsForReliability(assetId, startDate, endDate, modeId=None)</b>
    <li>Parameters <br />
        <ul>assetId - Asset ID.</ul>
        <ul>startDate - Start date.</ul>
        <ul>endDate - End date.</ul>
        <ul>modeId - Mode ID (e.g., 1 for 'production') or None for all modes.</ul>
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
modeId = 1
data = system.kanoa.event.getProductionEventsForReliability(assetId, startDate, endDate, modeId)
