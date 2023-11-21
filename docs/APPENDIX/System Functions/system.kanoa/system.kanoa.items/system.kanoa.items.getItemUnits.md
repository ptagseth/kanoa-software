---
id: getItemUnits
title: system.kanoa.items.getItemUnits
sidebar_position: 9
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<<<<<<< HEAD


<HeaderBox header="Description">Returns an item unit  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemUnits(paramsDict: PyDictionary)</b>
    <li> Parameters <br /> 
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemUnitId': 4, 'itemUnitName': 'Cans'} </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyDataset) row corresponding to searched item unit </ul>
=======
<HeaderBox header="Description">Returns an item unit </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemUnits(paramsDict: PyDictionary)</b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemUnitId': 4, 'itemUnitName': 'Cans'} </ul>
    </li>
    <li> Returns <br />
        <ul> (PyDataset) row corresponding to searched item unit </ul>
>>>>>>> c88e7f26e15cb9dfd4c7ab9d2c33eb6e0fdb7da9
    </li>
</HeaderBox>


### Code Examples

```py
# This returns the info for asset with assetID 3

system.kanoa.items.getItemUnits({'itemUnitId': 3})

```