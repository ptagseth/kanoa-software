---
id: copyAsset
title: system.kanoa.asset.copyAsset
hide_table_of_contents: true
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Makes a copy of the passed-in assetId. This will be an identical copy including all the child assets, links to modes, states, items, and attributes (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>copyAsset(assetId, userId)</b>
    <li> Parameters <br />
        <ul>assetId (int) - ID of the asset to copy.</ul>
        <ul>userId (int) - User ID.</ul>
    </li>
    <li> Returns <br />
        <ul>newAssetId (int) - The newly created asset ID.</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_id = 123
user_id = 456
new_asset_id = system.kanoa.asset.copyAsset(asset_id, user_id)
