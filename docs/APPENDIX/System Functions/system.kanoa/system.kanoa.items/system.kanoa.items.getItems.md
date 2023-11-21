---
id: getItems
title: system.kanoa.items.getItems
sidebar_position: 8
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


<HeaderBox header="Description">Returns item info for given parameters  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItems(paramsDict: PyDictionary)</b>
    <li> Parameters <br /> 
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]} </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyDataset) resultant query </ul>
    </li>
</HeaderBox>


### Code Examples

```py
# This returns the info for the enabled assets

paramsDict = {'enabled': True}
data = system.kanoa.items.getItems(paramsDict)

```