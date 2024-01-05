---
id: getAssetItems
title: system.kanoa.item.getAssetItems
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns items linked to assets for given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetItems(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Dictionary containing filter parameters.</ul>
    </li>
    <li>Returns <br />
        <ul>Basic Dataset.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'itemAssetRateIdList': [1],
    'enabled': True,
    'assetPath': 'Kanoa Industries%',
    'assetId': 1,
    'assetIdList': [1, 2],
    'itemSourceId': [1],
    'itemName': 'Bangers',
    'itemPath': 'FG\Bread%',
    'itemId': 1,
    'itemIdList': [1, 2, 3],
    'itemClassName': 'Bread%',
    'itemClassId': 1,
    'itemClassIdList': [1, 2, 3]
}
assetItemsData = getAssetItems(parameters)