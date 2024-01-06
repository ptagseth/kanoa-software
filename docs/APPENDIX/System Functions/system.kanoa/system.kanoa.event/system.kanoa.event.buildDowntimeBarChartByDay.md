---
id: buildDowntimeBarChartByDay
title: system.kanoa.event.buildDowntimeBarChartByDay
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    Takes the Downtime Data data and splits it by day. It is recommended to replace with a SQL function to speed things up.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>buildDowntimeBarChartByDay(data)</b>
    <li>Parameters <br />
        <ul>
            data - Downtime Data.
        </ul>
    </li>
    <li>Returns <br />
        data (pyDataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
data = your_downtime_data
result = system.kanoa.event.buildDowntimeBarChartByDay(data)

