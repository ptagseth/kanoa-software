---
id: getOperationalAssets
title: system.kanoa.asset.getOperationalAssets
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Returns assets that have production data. Used to filter out assets that have been created but are not in use.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getOperationalAssets(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataset).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'assetPath': 'Kanoa Industries%',
    'assetId': 1,
    'assetTypeIdList': [1, 2, 5],
    'assetGroupIdList': [2],
    'oeeTypeList': ['OEE_Enabled'],
    'userId': 5,
    'userFunction': 'configureAssets'
}
operational_assets = getOperationalAssets(parameters)

