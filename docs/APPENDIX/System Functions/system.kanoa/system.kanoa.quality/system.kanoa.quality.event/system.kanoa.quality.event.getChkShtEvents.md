---
id: getChkShtEvents
title: system.kanoa.quality.event.getChkShtEvents
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns scheduled checkSheets in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChkShtEvents(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing parameters (dictionary).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing scheduled checkSheets (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'assetId': 18, 'assetPath': 'Kanoa Industries\Adelaide Hills\Packaging\Line 1', 'itemClassPath': 'some path', 'itemId': 45, 'shiftNameId': 2}
data = system.kanoa.quality.event.getChkShtEvents(paramsDict=params_dict)

print(data)