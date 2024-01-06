---
id: updateWorkOrder
title: system.kanoa.order.updateWorkOrder
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a work order (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateWorkOrder(woInfo, userId)</b>
    <li>Parameters <br />
        <ul>woInfo (Dictionary) - Work order information (e.g., &#123;'workOrderId': 1, 'workOrderName': 'WO-0001', ...}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Number of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
recordsModified = system.kanoa.order.updateWorkOrder({'workOrderId': 1, 'workOrderName': 'WO-0001', ...}, 123)
