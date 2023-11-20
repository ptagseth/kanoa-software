---
id: getAssetGroups
title: system.kanoa.asset.getAssetGroups
sidebar_position: 2
hide_table_of_contents: true
---

:::info
This function requires KanoaCore module
:::


### Description
Returns assetGroups. Used for filtering assets and also for grouping asset states by 

### Syntax
**getAssetGroups(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - Dictionary i.e. {'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList': [1,2,3], 'oeeTypeList':['OEE_Enabled'], 'assetTypeIdList':[1,2,5], 'assetGroupIdList':[2]}

- **Returns**
    (PyDataset) the resultant query


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
