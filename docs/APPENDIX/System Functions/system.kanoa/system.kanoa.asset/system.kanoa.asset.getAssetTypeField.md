---
id: getAssetTypeField
title: system.kanoa.asset.getAssetTypeField
sidebar_position: 5
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns a single value for the asset type as described by the paramsDict. If no asset is found, null will be returned 

### Syntax
**getAssetTypeField(field: PyObject, paramsDict: PyDictionary)**

- **Parameters**  
    field: PyObject - the name of the asset type's field/column name
    
    paramsDict: PyDictionary - Dictionary i.e. {'enabled': True, 'assetTypeName': 'site', 'assetTypePath': 'enterprise/region/site', 'assetTypeId': 6, 'parentId': 4}

- **Returns**  
    the value of the asset type's field

### Code Examples

```py
#This will return the asset type name of assetID 19

field = 'assetTypeName'
paramsDict = {'assetId': 19}
system.kanoa.asset.getAssetTypeField(field, paramsDict)
```
