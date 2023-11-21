---
id: getItemClassField
title: system.kanoa.items.getItemClassField
sidebar_position: 5
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


<HeaderBox header="Description">Returns a single value for the item class as described by the paramsDict </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemClassField(field: PyObject, paramsDict: PyDictionary)</b>
    <li> Parameters <br /> 
        <ul>(String) name of item class field </ul>
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemClassName': 'FG', 'itemClassPath':'FGBread%', 'itemClassId':1, 'itemClassIdList':[1,2,3]}  </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyObject) value of item class field </ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns the ItemClassField for ItemClassId 50 and enabled Items

paramsDict = {'enabled' : True, 'ItemClassId':50}
system.kanoa.items.getItemClassField('itemClassName', paramsDict)

```