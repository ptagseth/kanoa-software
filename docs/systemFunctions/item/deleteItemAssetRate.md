---
id: deleteItemAssetRate
title: system.kanoa.item.deleteItemAssetRate
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the itemAssetRate (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemAssetRate(itemAssetRateId, userId)</b>
    <li>Parameters <br />
        <ul>itemAssetRateId (Integer) - ID of the item asset rate to delete.</ul>
        <ul>userId (Integer) - ID of the user.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
itemAssetRateId = 54
userId = 17
deletedRecords = system.kanoa.item.deleteItemAssetRate(itemAssetRateId, userId)

