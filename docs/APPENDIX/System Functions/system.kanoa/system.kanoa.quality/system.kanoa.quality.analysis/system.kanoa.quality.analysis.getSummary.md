---
id: getSummary
title: system.kanoa.quality.analysis.getSummary
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns summarized count of check sheets by state for the parameters passed in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getSummary(paramsDict, category)</b>
    <li> Parameters <br />
        <ul>
            <li>paramsDict - Dictionary containing parameters (dictionary).</li>
            <li>category - Category type (string).</li>
        </ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing summarized count data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'startDate': system.date.getDate(2023, 1, 1), 'endDate': system.date.getDate(2023, 12, 31), 'assetId': 18, 'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1', 'itemClassPath': 'some path', 'itemId': 45}
category = 'areaPath'
data = system.kanoa.quality.analysis.getSummary(paramsDict=params_dict, category=category)

