---
id: deleteItemAssetRates
title: system.kanoa.item.deleteItemAssetRates
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Unlinks all items from this asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteItemAssetRates(assetId)</b>
    <li>Parameters <br />
        <ul>assetId (Integer) - ID of the asset to unlink all items from.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
deletedRecords = system.kanoa.item.deleteItemAssetRates(56)
