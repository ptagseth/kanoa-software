---
id: getAssetGroups
title: system.kanoa.asset.getAssetGroups
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns assetGroups. Used for filtering assets and also for grouping asset states by (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getAssetGroups(paramsDict)</b>
    <li> Parameters <br />
        <ul>paramsDict (dict) - Dictionary containing filter parameters.</ul>
    </li>
    <li> Returns <br />
        <ul>data (pyDataSet).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
parameters = {
    'enabled': True,
    'assetGroupId': 1,
    'assetGroupName': 'Group1'
}
asset_groups = getAssetGroups(parameters)
