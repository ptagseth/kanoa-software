---
id: getAssetItems
title: system.kanoa.items.getAssetItems
sidebar_position: 2
---

:::info
This function requires KanoaCore module
:::


### Description
Returns items linked to assets for given parameters. Can be used to return assets that can produce items or items that can be produced by assets 

### Syntax
**getAssetItems(paramsDict: PyDictionary)** 

- **Parameters**  
    paramsDict: PyDictionary - (Dictionary) i.e. {itemAssetRateIdList: [1], 'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1], itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]}

    

- **Returns**  
    (PyDataset) resultant query


### Code Examples

```py
# This returns the asset info for assets using the Items enabled and ItemClassId set to 1

paramsDict = {'enabled' : True, 'itemClassId':1}
system.kanoa.items.getAssetItems(paramsDict)
```