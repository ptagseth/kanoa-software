---
id: getAssetTypeField
title: system.kanoa.asset.getAssetTypeField
sidebar_position: 7
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the asset type as described by the paramsDict. If no asset is found, null will be returned </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetTypeField(field: PyObject, paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> field: PyObject - the name of the asset type's field/column name <br /> </ul>
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled': True, 'assetTypeName': 'site', 'assetTypePath': 'enterprise/region/site', 'assetTypeId': 6, 'parentId': 4} </ul>
    </li>
    <li> Returns <br />
        <ul> the value of the asset type's field <br /> </ul>
    </li>
</HeaderBox>

### Code Examples

```py
#This will return the asset type name of assetID 19

field = 'assetTypeName'
paramsDict = {'assetId': 19}
system.kanoa.asset.getAssetTypeField(field, paramsDict)
```
