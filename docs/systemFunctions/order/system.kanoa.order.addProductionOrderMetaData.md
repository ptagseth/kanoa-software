---
id: addProductionOrderMetaData
title: system.kanoa.order.addProductionOrderMetaData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    Adds a production order meta data value (kanoaOPS).
</HeaderBox>
<HeaderBox header="Syntax">
    <b>addProductionOrderMetaData(workOrderMetaInfo, userId)</b>
    <li>Parameters:<br />
        <ul>workOrderMetaInfo: string - i.e., &#123;'workOrderId': 45, 'metaDataName' : 'apiBody', 'metaDataValue': some value}</ul>
        <ul>userId: int</ul>
    </li>
    <li>Returns: <br />
        <ul>workOrderMetaDataId - int</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
workOrderMetaInfo = {'workOrderId': 45, 'metaDataName' : 'apiBody', 'metaDataValue': 'some value'}
userId = 123
workOrderMetaDataId = system.kanoa.order.addProductionOrderMetaData(workOrderMetaInfo, userId)
