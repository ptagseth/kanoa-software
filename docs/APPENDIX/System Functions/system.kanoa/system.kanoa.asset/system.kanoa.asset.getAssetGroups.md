---
id: getAssetGroups
title: system.kanoa.asset.getAssetGroups
sidebar_position: 2
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns assetGroups. Used for filtering assets and also for grouping asset states by </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetGroups(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList': [1,2,3], 'oeeTypeList':['OEE_Enabled'], 'assetTypeIdList':[1,2,5], 'assetGroupIdList':[2]} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
#
# This returns the GroupID for the assets listed
#
paramsDict = {'assetIdList':[10,1,7]}
data=system.kanoa.asset.getAssetGroups(paramsDict)
```

```py
#
#This returns the Enabled Groups
#
paramsDict = {'enabled': True}
data=system.kanoa.asset.getAssetGroups(paramsDict)
```
