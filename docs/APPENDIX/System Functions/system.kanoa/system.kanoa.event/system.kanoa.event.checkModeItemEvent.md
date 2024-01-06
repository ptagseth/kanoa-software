---
id: checkModeItemEvent
title: system.kanoa.event.checkModeItemEvent
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Checks if a work order or item exists and creates it if not.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkModeItemEvent(assetId, workOrderName, itemName, userId)</b>
    <li>Parameters <br />
        <ul>
            assetId - Asset ID.
            workOrderName - Work order name.
            itemName - Item name.
            userId - User ID.
        </ul>
    </li>
    <li>Returns <br />
        workOrderId (int), itemId (int).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
assetId = 123
workOrderName = 'WorkOrder123'
itemName = 'Item123'
userId = 999
workOrderId, itemId = system.kanoa.event.checkModeItemEvent(assetId, workOrderName, itemName, userId)

