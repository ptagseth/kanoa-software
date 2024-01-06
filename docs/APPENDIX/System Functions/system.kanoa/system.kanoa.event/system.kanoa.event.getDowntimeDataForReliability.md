---
id: getDowntimeDataForReliability
title: system.kanoa.event.getDowntimeDataForReliability
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns downtime data for the reliability report filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeDataForReliability(assetId, startDate, endDate, durationSecs)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            startDate - Start date.
            endDate - End date.
            durationSecs - Filter downtime events for events greater than this value.
        </ul>
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

