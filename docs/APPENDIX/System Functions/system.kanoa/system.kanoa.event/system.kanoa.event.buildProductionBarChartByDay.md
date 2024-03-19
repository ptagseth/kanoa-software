---
id: buildProductionBarChartByDay
title: system.kanoa.event.buildProductionBarChartByDay
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Takes the production event data and splits it by day. It is recommended to replace with a SQL function to speed things up.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>buildProductionBarChartByDay(data)</b>
    <li>Parameters <br />
        <ul>data - Production event data.</ul>
    </li>
    <li>Returns <br />
        data (pyDataset).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
data = your_production_event_data
result = buildProductionBarChartByDay(data)
