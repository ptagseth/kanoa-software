---
id: addItemAssetRate
title: system.kanoa.item.addItemAssetRate
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds the rateInfo to the itemAssetRate table. An entry in this table signifies that this item can be run on this asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addItemAssetRate(rateInfo, userId)</b>
    <li>Parameters <br />
        <ul>rateInfo (Dictionary) - Dictionary containing rate information (e.g., &#123;'itemId': 1, 'assetId': 56, 'standardRate': '100.0', 'scheduleRate': 50.0, 'itemPeriodId': 1, 'infeedUnitId': 7, 'outfeedUnitId': 5, 'wasteUnitId': 7, 'packageCount': 24, 'itemSourceId': 1, 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modifiedRecords = system.kanoa.item.addItemAssetRate({'itemId': 1, 'assetId': 56, 'standardRate': '100.0', 'scheduleRate': 50.0, 'itemPeriodId': 1, 'infeedUnitId': 7, 'outfeedUnitId': 5, 'wasteUnitId': 7, 'packageCount': 24, 'itemSourceId': 1, 'enabled': True}, 123)
