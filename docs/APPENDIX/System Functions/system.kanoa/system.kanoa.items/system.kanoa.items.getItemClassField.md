---
id: getItemClassField
title: system.kanoa.items.getItemClassField
sidebar_position: 5
---
import PurpleBox from '@site/src/components/PurpleBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns a single value for the item class as described by the paramsDict. 

### Syntax
**getItemClassField(field: PyObject, paramsDict: PyDictionary)**

- **Parameters**  
    (String) name of item class field 

    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemClassName': 'FG', 'itemClassPath':'FGBread%', 'itemClassId':1, 'itemClassIdList':[1,2,3]} 

- **Returns**  
    (PyObject) value of item class field 


### Code Examples

```py
# This returns the ItemClassField for ItemClassId 50 and enabled Items

paramsDict = {'enabled' : True, 'ItemClassId':50}
system.kanoa.items.getItemClassField('itemClassName', paramsDict)

```