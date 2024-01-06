---
id: getProductionEventsByShift
title: system.kanoa.event.getProductionEventsByShift
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns production data by shift filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionEventsByShift(assetId, startDate, endDate, modeId=None)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            startDate - Start date.
            endDate - End date.
            modeId - Mode ID (e.g., 1 for 'production') or None for all modes.
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
modeId = 1
data = system.kanoa.event.getProductionEventsByShift(assetId, startDate, endDate, modeId)
