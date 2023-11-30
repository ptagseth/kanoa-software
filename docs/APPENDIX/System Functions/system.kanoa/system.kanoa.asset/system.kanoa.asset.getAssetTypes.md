---
id: getAssetTypes
title: system.kanoa.asset.getAssetTypes
sidebar_position: 8
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns assetType Info </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetTypes(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled': True, 'assetTypeName': 'site', 'assetTypePath': 'enterprise/region/site', 'assetTypeId': 6, 'parentId': 4} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) the resultant query <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
# This returns the asset Type info for assetId 18

paramsDict = {'assetId':18}
data=system.kanoa.asset.getAssetTypes(paramsDict)

```

```py
# This returns the asset Type info for all enabled assets

paramsDict = {'enabled': True}
data=system.kanoa.asset.getAssetTypes(paramsDict)
```
