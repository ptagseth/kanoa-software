---
id: updateItemAssetRate
title: system.kanoa.item.updateItemAssetRate
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Updates the rateInfo in the itemAssetRate table (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>updateItemAssetRate(rateInfo, userId)</b>
    <li>Parameters <br />
        <ul>rateInfo (Dictionary) - Dictionary containing updated rate information (e.g., &#123;'itemAssetRateId': 1, 'itemId': 1, 'assetId': 56, 'standardRate': '100.0', 'scheduleRate': 50.0, 'itemPeriodId': 1, 'infeedUnitId': 7, 'outfeedUnitId': 5, 'wasteUnitId': 7, 'packageCount': 24, 'itemSourceId': 1, 'enabled': True}).</ul>
        <ul>userId (Integer) - User ID.</ul>
    </li>
    <li>Returns <br />
        <ul># of records modified (Integer).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
modifiedRecords = updateItemAssetRate({'itemAssetRateId': 1, 'itemId': 1, 'assetId': 56, 'standardRate': '100.0', 'scheduleRate': 50.0, 'itemPeriodId': 1, 'infeedUnitId': 7, 'outfeedUnitId': 5, 'wasteUnitId': 7, 'packageCount': 24, 'itemSourceId': 1, 'enabled': True}, 123)


