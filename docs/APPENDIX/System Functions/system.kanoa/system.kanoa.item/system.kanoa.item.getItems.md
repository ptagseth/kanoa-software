---
id: getItems
title: system.kanoa.item.getItems
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns item info for given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getItems(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'itemName': 'Bangers',
    'itemPath': 'FG\Bread%',
    'itemId': 1,
    'itemIdList': [1, 2, 3],
    'itemClassName': 'Bread%',
    'itemClassId': 1,
    'itemClassIdList': [1, 2, 3]
}
itemData = getItems(parameters)