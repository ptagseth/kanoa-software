---
id: getProductionOrderStates
title: system.kanoa.order.getProductionOrderStates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaCore</b> module</PurpleBox>
<HeaderBox header="Description">Returns production order states (kanoaCore).</HeaderBox>
<HeaderBox header="Syntax">
    <b>getProductionOrderStates(paramsDict)</b>
    <li>Parameters <br />
        <ul>paramsDict (Dictionary) - Parameters to filter production order states.</ul>
    </li>
    <li>Returns <br />
        <ul>pyDataset.</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
orderStates = getProductionOrderStates({'enabled': True, 'workOrderStatusId': 1, 'workOrderStatusName': 'Released'})

