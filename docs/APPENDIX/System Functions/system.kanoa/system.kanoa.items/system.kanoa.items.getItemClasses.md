---
id: getItemClasses
title: system.kanoa.items.getItemClasses
sidebar_position: 4
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


<HeaderBox header="Description">Returns itemClass info for given parameters  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getItemClasses(paramsDict: PyDictionary) </b>
    <li> Parameters <br /> 
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;'enabled':True, 'itemClassName': 'FG', 'itemClassPath':'FGBread%', 'itemClassId':1, 'itemClassIdList':[1,2,3]} </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyDataset) resultant query </ul>
    </li>
</HeaderBox>


### Code Examples

```py
#This will return the ItemClasses with ItemClassId set to 50 and Enabled

paramsDict = {'enabled' : True, 'ItemClassId':50}
system.kanoa.items.getItemClasses(paramsDict)
```