---
id: getDowntimeDataByShiftSummary
title: system.kanoa.event.getDowntimeDataByShiftSummary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns summarized downtime data by shift.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getDowntimeDataByShiftSummary(assetId, startDate, endDate)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            startDate - Start date.
            endDate - End date.
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
data = system.kanoa.event.getDowntimeDataByShiftSummary(assetId, startDate, endDate)

