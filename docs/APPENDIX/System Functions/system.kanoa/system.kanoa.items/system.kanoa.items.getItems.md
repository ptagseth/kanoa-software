---
id: getItems
title: system.kanoa.items.getItems
sidebar_position: 8
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


### Description
Returns item info for given parameters 

### Syntax
**getItems(paramsDict: PyDictionary)**

- **Parameters**  
    paramsDict: PyDictionary - (Dictionary) i.e. {'enabled':True, 'itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]}


- **Returns**  
    (PyDataset) resultant query


### Code Examples

```py
# This returns the info for the enabled assets

paramsDict = {'enabled': True}
data = system.kanoa.items.getItems(paramsDict)

```