---
id: getOEEDataByInterval
title: system.kanoa.event.getOEEDataByInterval
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Returns OEE data by interval filtered by the given parameters.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getOEEDataByInterval(assetId, startDate, endDate, interval)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            startDate - Start date.
            endDate - End date.
            interval - Interval string (e.g., 'Hour', 'Day', 'Week', None).
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
interval = 'Hour'
data = system.kanoa.event.getOEEDataByInterval(assetId, startDate, endDate, interval)

