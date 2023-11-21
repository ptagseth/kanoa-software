---
id: getItemClasses
title: system.kanoa.items.getItemClasses
sidebar_position: 4
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns itemClass info for given parameters 

### Syntax
**getItemClasses(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemClassName': 'FG', 'itemClassPath':'FGBread%', 'itemClassId':1, 'itemClassIdList':[1,2,3]} 

- **Returns**  
    (PyDataset) resultant query


### Code Examples

```py
#This will return the ItemClasses with ItemClassId set to 50 and Enabled

paramsDict = {'enabled' : True, 'ItemClassId':50}
system.kanoa.items.getItemClasses(paramsDict)
```