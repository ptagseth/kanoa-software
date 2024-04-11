---
id: getToleranceData
title: system.kanoa.quality.config.getToleranceData
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaQDS</b> module</PurpleBox>
<HeaderBox header="Description">Returns tolerance data associated with the item, itemSet, itemClass, all items, asset, or any asset for the given attribute, asset, and item in KanoaQDS. The results are ranked based on the best fit.</HeaderBox>
<HeaderBox header="Syntax">
    <b>getToleranceData(attributeId, assetId, itemId)</b>
    <li> Parameters <br />
        <ul>int attributeId - ID of the attribute</ul>
        <ul>int assetId - ID of the asset</ul>
        <ul>int itemId - ID of the item</ul>
    </li>
    <li> Returns <br />
        <ul>pyDataset toleranceData - Dataset containing tolerance data.</ul>
    </li>
</HeaderBox>

### Code Examples
```python
# Usage example
attribute_id = 1
asset_id = 2
item_id = 3
tolerance_data = system.kanoa.quality.config.getToleranceData(attributeId=attribute_id, assetId=asset_id, itemId=item_id)

# Accessing data in the dataset
for row in tolerance_data:
    print(f"Rank: {row['rankId']}, Rank Info: {row['rankInfo']}, Attribute Tolerance ID: {row['attributeToleranceId']}")

