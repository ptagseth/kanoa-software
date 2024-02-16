---
id: getProductionOrderMetaData
title: system.kanoa.order.getProductionOrderMetaData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function is not part of a class and can be used independently.</PurpleBox>
<HeaderBox header="Description">
    Returns production order metaData (kanoaOPS).
</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionOrderMetaData(paramsDict)</b>
    <li>Parameters:<br />
        <ul>paramsDict: Dictionary - i.e., &#123;'enabled': True, 'workOrderMetaDataId': 42, 'workOrderId': 27}</ul>
    </li>
    <li>Returns:<br />
        <ul> pyDataset </ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
paramsDict = {'enabled': True, 'workOrderMetaDataId': 42, 'workOrderId': 27}
data = getProductionOrderMetaData(paramsDict)
