---
id: updateProductionOrderMetaData
title: system.kanoa.order.updateProductionOrderMetaData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    Update a production order meta data (kanoaOPS).
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateProductionOrderMetaData(workOrderMetaInfo, userId)</b>
    <li>Parameters: <br />
        <ul>workOrderMetaInfo: string - i.e., &#123;'workorderMetaDataId': 34, 'workOrderId': 45, 'metaDataName' : 'apiBody', 'metaDataValue': some value}</ul>
            <ul>userId: int</ul>
    </li>
    <li>Returns:<br />
        <ul># of records modified - int</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
workOrderMetaInfo = {'workorderMetaDataId': 34, 'workOrderId': 45, 'metaDataName' : 'apiBody', 'metaDataValue': 'some value'}
userId = 123
num_records = system.kanoa.order.updateProductionOrderMetaData(workOrderMetaInfo, userId)