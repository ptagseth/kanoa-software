---
id: getParentAsset
title: system.kanoa.asset.getParentAsset
sidebar_position: 7
hide_table_of_contents: true
---

:::info
This function requires KanoaCore module
:::


### Description
Returns a parent asset of the given type for the given asset. e.g. getParentAsset('site', 'Kanoa IndustriesAdelaide HillsPackagingLine 1') will return the asset for 'Kanoa IndustriesAdelaide Hills'

### Syntax
**getParentAsset(assetTypeName: PyObject, assetPath: PyObject)**

- **Parameters**  
    assetTypeName: PyObject - name of asset type i.e. 'enterprise', 'site'

    assetPath: PyObject

- **Returns**  
    (PyDataset) the resultant query

### Code Examples

```py
# This returns the parent asset site of Kanoa Industries\Adelaide Hills\Packaging\Line 1

assetType = 'site'
path = 'Kanoa Industries\Adelaide Hills\Packaging\Line 1'
data=system.kanoa.asset.getParentAsset(assetType, path)

```
