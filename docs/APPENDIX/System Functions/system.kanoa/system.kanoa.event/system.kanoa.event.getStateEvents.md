---
id: getStateEvents
title: system.kanoa.event.getStateEvents
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns state data filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getStateEvents(assetId, startDate, endDate)</b>
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
data = system.kanoa.event.getStateEvents(assetId, startDate, endDate)
