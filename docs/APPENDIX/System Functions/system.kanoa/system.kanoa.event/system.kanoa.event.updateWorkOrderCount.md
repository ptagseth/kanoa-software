---
id: updateWorkOrderCount
title: system.kanoa.event.updateWorkOrderCount
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Allows the count to be updated for a work order after a work order has been completed.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateWorkOrderCount(counterId, assetId, value, workOrderName, userId=None)</b>
    <li>Parameters <br />
        <ul>counterId - Counter ID.</ul>
        <ul>assetId - Asset ID.</ul>
        <ul>value (float) - Delta value.</ul>
        <ul>workOrderName - Work order name.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        Records deleted (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
counterId = 123
assetId = 456
value = 5.0
workOrderName = 'WorkOrder123'
userId = 999
recordsDeleted = system.kanoa.event.updateWorkOrderCount(counterId, assetId, value, workOrderName, userId)

