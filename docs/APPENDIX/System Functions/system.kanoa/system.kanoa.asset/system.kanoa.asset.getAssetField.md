---
id: getAssetField
title: system.kanoa.asset.getAssetField
sidebar_position: 1
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns a single value for the asset as described by the paramsDict. If no asset is found, null will be returned

### Syntax
**getAssetField(field:PyObject, paramsDict:PyDictionary)**

- **Parameters**  
    field: PyObject - The name of the asset's field/column name

    paramsDict: PyDictionary - Dictionary i.e. {'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList': [1,2,3], 'oeeTypeList':['OEE_Enabled'], 'assetTypeIdList':[1,2,5], 'assetGroupIdList':[2]}

- **Returns**
    The value of the asset's field


### Code Examples

```py

#This returns the assetPath for assetID 18

field = 'assetPath'
paramsDict = {'assetId':18}
system.kanoa.asset.getAssetTypeField(field, paramsDict)
```

