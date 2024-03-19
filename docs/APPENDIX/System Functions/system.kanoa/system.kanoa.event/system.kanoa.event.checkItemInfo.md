---
id: checkItemInfo
title: system.kanoa.event.checkItemInfo
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    When a tag value changes for mode, work order, or product, check if this work order or item exists, and if not, create it.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>checkItemInfo(assetId, workOrderName, itemName, userId)</b>
    <li>Parameters <br />
        <ul>assetId (int) - Asset ID.</ul>
        <ul>workOrderName (string) - Work order name.</ul>
        <ul>itemName (string) - Item name.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        workOrderId, itemId (tuple).
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.event.checkItemInfo(assetId=123, workOrderName="WO123", itemName="ItemXYZ", userId=999)

