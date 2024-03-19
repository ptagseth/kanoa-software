---
id: assetOperationChange
title: system.kanoa.event.assetOperationChange
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">
    Call this function whenever the mode on an asset changes. Will set all child assets to the same mode if includeChildren is true.
</HeaderBox>
<HeaderBox header="Syntax">
    <b>assetOperationChange(assetId, modeCode, workOrderId, itemId, modeSourceId, tStamp, includeChildren, userId)</b>
    <li>Parameters <br />
        <ul>assetId (int) - Asset ID.</ul>
        <ul>modeCode (int) - Mode code.</ul>
        <ul>workOrderId (int) - Work order ID.</ul>
        <ul>itemId (int) - Item ID.</ul>
        <ul>tStamp (datetime) - Timestamp.</ul>
        <ul>includeChildren (boolean) - Include child assets if true.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li>Returns <br />
        None.
    </li>
</HeaderBox>

### Code Example

```python
# Example Usage:
system.kanoa.event.assetOperationChange(assetId=123, modeCode=456, workOrderId=789, itemId=101, modeSourceId=111, tStamp=timestamp, includeChildren=True, userId=999)

