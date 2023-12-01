---
id: getProductionOrders
title: system.kanoa.order.getProductionOrders
sidebar_position: 2
---
import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';


<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>

<HeaderBox header="Description">Returns items linked to assets for given parameters. Can be used to return assets that can produce items or items that can be produced by assets  </HeaderBox>

<HeaderBox header="Syntax">
    <b>getProductionOrders(paramsDict: PyDictionary) </b>
    <li> Parameters <br />
        <ul> paramsDict: PyDictionary - Dictionary i.e. &#123;itemAssetRateIdList: [1], 'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1], itemName': 'Bangers', 'itemPath':'FGBread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]} </ul>
    </li>
    <li> Returns <br />
        <ul>(PyDataset) the resultant dataset <br /> </ul>
    </li>
</HeaderBox>


### Code Examples

```py


```