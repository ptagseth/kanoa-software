---
id: getAssetTypes
title: system.kanoa.asset.getAssetTypes
sidebar_position: 6
hide_table_of_contents: true
---

:::info
This function requires KanoaCore module
:::


### Description
Returns assetType Info 

### Syntax
**getAssetTypes(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - Dictionary i.e. {'enabled': True, 'assetTypeName': 'site', 'assetTypePath': 'enterprise/region/site', 'assetTypeId': 6, 'parentId': 4}

- **Returns**  
    (PyDataset) the resultant query

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
