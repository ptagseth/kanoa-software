---
id: getAssetItemField
title: system.kanoa.items.getAssetItemField
sidebar_position: 1
---

:::info
This function requires KanoaCore module
:::


### Description
Returns a single value for the asset item as described by the paramsDict 

### Syntax
**getAssetItemField(field: PyObject, paramsDict: PyDictionary)**

- **Parameters**  
    field: PyObject - (String) name of asset item field

    paramsDict: PyDictionary - (Dictionary) i.e. {itemAssetRateIdList: [1], 'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1], itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]}


- **Returns**  
    (PyObject) value of asset item field


### Code Examples

```py
# This returns the ItemClassName for the ItemClassId = 1 and enabled

paramsDict = {'enabled' : True, 'itemClassId':1}
system.kanoa.items.getAssetItemField('itemClassName', paramsDict)
```