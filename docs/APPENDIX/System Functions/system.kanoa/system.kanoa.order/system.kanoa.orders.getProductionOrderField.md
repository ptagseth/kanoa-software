---
id: getProductionOrderField
title: system.kanoa.order.getProductionOrderField
sidebar_position: 1
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns a single value for the production order as described by the paramsDict  </HeaderBox>


<HeaderBox header="Syntax">
    <b>getProductionOrderField(field: PyObject, paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul>field: PyObject (String) the name of the production order's field/column name<br /> </ul>
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;itemAssetRateIdList: [1], 'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1], itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyObject) value of the production order's field <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py


```