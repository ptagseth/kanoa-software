---
id: buildDowntimeBarChartByDay
title: system.kanoa.event.buildDowntimeBarChartByDay
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Takes the Downtime Data data and splits it by day. It is recommended to replace with a SQL function to speed things up.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>buildDowntimeBarChartByDay(data)</b>
    <li>Parameters <br />
        <ul>data - Downtime Data.</ul>
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

