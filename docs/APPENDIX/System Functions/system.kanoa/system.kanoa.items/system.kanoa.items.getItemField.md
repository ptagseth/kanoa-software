---
id: getItemField
title: system.kanoa.items.getItemField
sidebar_position: 6
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>



<HeaderBox header="Description">Returns a single value for the item as described by the paramsDict  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemField(field: PyObject, paramsDict: PyDictionary)</b>
    <li> Parameters <br /> 
        <ul>field: PyObject - (String) name of field </ul>
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]} </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyObject) value of field for item found </ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns the ItemName of ItemId 95 

paramsDict = {'itemId' : 95 }
system.kanoa.items.getItemField('itemName', paramsDict)
```