---
id: getChkShtEventItems
title: system.kanoa.quality.event.getChkShtEventItems
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Gets data for the checks table called by the chkShtEventEditor in KanoaQDS.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getChkShtEventItems(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict - Dictionary containing parameters (dictionary).</ul>
    </li>
    <li> Returns <br />
        <ul>data - A dataset containing check sheet event items (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Example
```python
# Usage example
params_dict = {'chkShtEventId': 18, 'chkShtId': 3, 'chkItemId': 437, 'chkShtTypeId': 4, 'itemClassPath': 'some path', 'chkShtStateIds': [1, 2, 3], 'itemId': 45, 'persistence': False, 'enabled': True}
data = system.kanoa.quality.event.getChkShtEventItems(paramsDict=params_dict)

print(data)