---
id: getAssetTagPath
title: system.kanoa.asset.getAssetTagPath
sidebar_position: 4
hide_table_of_contents: true
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function is used in <b>Python Scripting</b></PurpleBox>


### Description
Given an assetPath or assetId, this function will return the tag path 

### Syntax
**getAssetTagPath(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - Dictionary i.e. {'assetPath': 'Kanoa IndustriesAdelaide HillsPackagingLine 1'} or {'assetId':18}

- **Returns**  
tag path of asset

### Code Examples

```py
#This returns the tag path for assetID 18

paramsDict = {'assetId':18}
data=system.kanoa.asset.getAssetTagPath(paramsDict)
```
