---
id: deleteWorkOrder
title: system.kanoa.order.deleteWorkOrder
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes a work order (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteWorkOrder(workOrderId, userId)</b>
    <li>Parameters <br />
        <ul>workOrderId (Integer) - Work order ID.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Boolean indicating success (True) and number of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
success, recordsModified = system.kanoa.order.deleteWorkOrder(1, 123)
