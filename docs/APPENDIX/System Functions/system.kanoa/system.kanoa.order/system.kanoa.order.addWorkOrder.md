---
id: addWorkOrder
title: system.kanoa.order.addWorkOrder
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a work order (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addWorkOrder(woInfo, userId)</b>
    <li>Parameters <br />
        <ul>woInfo (Dictionary) - Work order information (e.g., &#123;'workOrderName': 'WO-0001', 'modeId': 1, ...}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Work Order ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
workOrderId = addWorkOrder({'workOrderName': 'WO-0001', 'modeId': 1, 'itemId': 47, ...}, 123)
