---
id: addProductionOrderStatus
title: system.kanoa.order.addProductionOrderStatus
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds a production order status (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addProductionOrderStatus(workOrderStatusInfo, userId)</b>
    <li>Parameters <br />
        <ul>workOrderStatusInfo (Dictionary) - Production order status information.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Work Order Status ID (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
statusId = addProductionOrderStatus({'workOrderStatusName': 'Released', 'statusColor': '#FFFFFF', 'enabled': True}, 123)

