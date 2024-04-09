---
id: getProductionOrders
title: system.kanoa.order.getProductionOrders
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns production orders linked to assets for given parameters (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionOrders(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter production orders.</ul>
    </li>
    <li>Returns <br />
        <ul>Basic Dataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
productionOrders = system.kanoa.order.getProductionOrders({'enabled': True, 'assetPath': 'Kanoa Industries%', ...})

#			Dictionary i.e. {'enabled':True, 'assetPath': 'Kanoa Industries%', 'assetId': 1, 'assetIdList':[1,2], 'itemSourceId':[1]}
#						i.e. {itemName': 'Bangers', 'itemPath':'FG\Bread%', 'itemId':1, 'itemIdList':[1,2,3], 'itemClassName': 'Bread%', itemClassId':1, 'itemClassIdList':[1,2,3]}
#						i.e {'workOrderName': 'WO-0001', 'workOrderId': 1, 'workOrderStatusList: ['Released'], 'workOrderStatusName' = ['In Progress'']}
#						i.e {'startDate': someDate, 'endDate': someDate}
#