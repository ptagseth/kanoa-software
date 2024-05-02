---
id: deleteAssetTagStructure
title: system.kanoa.asset.deleteAssetTagStructure
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Deletes the assetOEE UDT instance for the passed-in assetId (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>deleteAssetTagStructure(assetId, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>No specific return value.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 123
user_id = 456
system.kanoa.asset.deleteAssetTagStructure(asset_id, user_id)
