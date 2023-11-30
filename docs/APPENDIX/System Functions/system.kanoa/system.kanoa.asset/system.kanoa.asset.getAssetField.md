---
id: getAssetField
title: system.kanoa.asset.getAssetField
sidebar_position: 2
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns a single value for the asset as described by the paramsDict. If no asset is found, null will be returned</HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetField(field:PyObject, paramsDict:PyDictionary)</b>
    <li> Parameters <br />
        <ul> field: PyObject - The name of the asset's field/column name <br /> </ul>
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList': [1,2,3], 'oeeTypeList':['OEE_Enabled'], 'assetTypeIdList':[1,2,5], 'assetGroupIdList':[2]} </ul>
    </li>
    <li> Returns <br />
        <ul> The value of the asset's field <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py

#This returns the assetPath for assetID 18

field = 'assetPath'
paramsDict = {'assetId':18}
system.kanoa.asset.getAssetTypeField(field, paramsDict)
```

