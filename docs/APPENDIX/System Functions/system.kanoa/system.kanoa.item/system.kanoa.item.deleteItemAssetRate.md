---
id: deleteItemAssetRate
title: system.kanoa.item.deleteItemAssetRate
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the itemAssetRate (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemAssetRate(itemAssetRateId)</b>
    <li>Parameters <br />
        <ul>itemAssetRateId (Integer) - ID of the item asset rate to delete.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deletedRecords = deleteItemAssetRate(1)

