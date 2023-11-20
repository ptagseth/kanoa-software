---
id: getItemField
title: system.kanoa.items.getItemField
sidebar_position: 6
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns a single value for the item as described by the paramsDict 

### Syntax
**getItemField(field: PyObject, paramsDict: PyDictionary)**

- **Parameters**  
    field: PyObject - (String) name of field

    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]} 

- **Returns**  
    (PyObject) value of field for item found


### Code Examples

```py
# This returns the ItemName of ItemId 95 

paramsDict = {'itemId' : 95 }
system.kanoa.items.getItemField('itemName', paramsDict)
```