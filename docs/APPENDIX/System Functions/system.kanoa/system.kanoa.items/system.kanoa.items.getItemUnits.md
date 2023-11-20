---
id: getItemUnits
title: system.kanoa.items.getItemUnits
sidebar_position: 9
---

:::info
This function requires KanoaCore module
:::

### Description
Returns an item unit 

### Syntax
**getItemUnits(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemUnitId': 4, 'itemUnitName': 'Cans'}

    
- **Returns**  
    (PyDataset) row corresponding to searched item unit


### Code Examples

```py
# This returns the info for asset with assetID 3

system.kanoa.items.getItemUnits({'itemUnitId': 3})

```