---
id: getStateEventSummary
title: system.kanoa.event.getStateEventSummary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is part of a class and requires proper class instantiation.</PurpleBox>
<HeaderBox header="Description">
    Returns summarized state data filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateEventSummary(assetId, startDate, endDate)</b>
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
data = system.kanoa.event.getStateEventSummary(assetId, startDate, endDate)