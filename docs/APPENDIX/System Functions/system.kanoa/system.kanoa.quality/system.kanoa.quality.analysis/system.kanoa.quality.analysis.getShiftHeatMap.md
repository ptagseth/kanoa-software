---
id: getShiftHeatMap
title: system.kanoa.quality.analysis.getShiftHeatMap
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns heatmap data of check sheets by Shift for the parameters passed in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getShiftHeatMap(paramsDict, category)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing parameters (dictionary).</li>
            <li>category - Category type (string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing heatmap data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'startDate': system.date.getDate(2023, 1, 1), 'endDate': system.date.getDate(2023, 12, 31), 'assetPath': 'Kanoa Industries\Adelaide Hills'}
category = 'areaPath'
data = system.kanoa.quality.analysis.getShiftHeatMap(paramsDict=params_dict, category=category)

print(data)
