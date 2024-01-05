---
id: updateWorkOrderField
title: system.kanoa.order.updateWorkOrderField
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates a work order field (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateWorkOrderField(workOrderId, field, value, userId)</b>
    <li>Parameters <br />
        <ul>workOrderId (Integer) - Work order ID.</ul>
        <ul>field (String) - Column name.</ul>
        <ul>value (pyObject) - New value.</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul>Number of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
recordsModified = updateWorkOrderField(1, 'reqdQty', 15000.0, 123)
