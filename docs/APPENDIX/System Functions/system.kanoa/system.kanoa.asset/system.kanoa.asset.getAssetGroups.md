---
id: getAssetGroups
title: system.kanoa.asset.getAssetGroups
sidebar_position: 10
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns assetGroups. Used for filtering assets and also for grouping asset states</HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetGroups(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled': True, 'assetGroupId': 1, 'assetGroupName': 'Packaging'} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
#
# This returns the group info for the group with ID 1
#
paramsDict = {'assetGroupId': 1}
data=system.kanoa.asset.getAssetGroups(paramsDict)
```

```py
#
#This returns the Enabled Groups
#
paramsDict = {'enabled': True}
data=system.kanoa.asset.getAssetGroups(paramsDict)
```
