---
id: addAsset
title: system.kanoa.asset.addAsset
---

import PurpleBox from '@site/src/components/PurpleBox';
import HeaderBox from '@site/src/components/HeaderBox';

<PurpleBox>This function requires <b>KanoaOPS</b> module</PurpleBox>
<HeaderBox header="Description">Adds an asset (kanoaOPS).</HeaderBox>
<HeaderBox header="Syntax">
    <b>addAsset(assetInfo, userId)</b>
    <li> Parameters <br />
        <ul>assetInfo (dictionary) - Dictionary containing asset information.</ul>
        <ul>userId (int) - User ID for tracking changes.</ul>
    </li>
    <li> Returns <br />
        <ul>assetId (int).</ul>
    </li>
</HeaderBox>

### Code Examples

```python
# Example Usage:
asset_info = {
    'assetName': 'SampleAsset',
    'parentId': 1,
    'assetTypeId': 1,
    'assetGroupId': 2,
    'oee': 1.0,
    'a': 0.9,
    'p': 0.8,
    'q': 0.7,
    'targetThreshold': 0.85,
    'oeeType': 'OEE_Enabled',
    'sortOrder': 1,
    'enabled': True
}
user_id = 5
asset_id = addAsset(asset_info, user_id)
