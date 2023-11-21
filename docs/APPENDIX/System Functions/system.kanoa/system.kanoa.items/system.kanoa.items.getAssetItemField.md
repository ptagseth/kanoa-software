---
id: getAssetItemField
title: system.kanoa.items.getAssetItemField
sidebar_position: 1
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>


<HeaderBox header="Description">Returns a single value for the asset item as described by the paramsDict </HeaderBox>

<HeaderBox header="Syntax">
    <b>getAssetItemField(field: PyObject, paramsDict: PyDictionary) </b>
    <li> Parameters <br /> 
        <ul>field: PyObject - (String) name of asset item field </ul>
        <ul> paramsDict: PyDictionary - (Dictionary) i.e. &#123;itemAssetRateIdList: [1], 'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1], itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]}
 </ul> 
    </li>
    <li> Returns <br /> 
        <ul>(PyObject) value of asset item field </ul>
    </li>
</HeaderBox>



### Code Examples

```py
# This returns the ItemClassName for the ItemClassId = 1 and enabled

paramsDict = {'enabled' : True, 'itemClassId':1}
system.kanoa.items.getAssetItemField('itemClassName', paramsDict)
```